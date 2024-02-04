import { useCallback, useContext } from "react";
import { LoadingContext } from "./Providers/LoadingProvider";
import { AllDogsContext } from "./Providers/AllDogsProvider";
import { Requests } from "./api";
import { Dog } from "./types";

export const useServerActions = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { allDogs, setAllDogs } = useContext(AllDogsContext);

  const refetch = useCallback(() => {
    //TODO consider refactoring
    setIsLoading(true);
    Requests.getAllDogs()
      .then(setAllDogs)
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setAllDogs]);

  const deleteDog = (id: number) => {
    const updatedDogData = allDogs.filter((dog) => dog.id !== id);
    setAllDogs(updatedDogData);

    Requests.deleteDogRequest(id)
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        //setAllDogs(allDogs);
        refetch();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const postDog = (newDog: Omit<Dog, "id">) => {
    const updatedLocalDogData = () => {
      const newLocalDog = { ...newDog, id: allDogs.length };
      return [...allDogs, newLocalDog];
    };

    setAllDogs(updatedLocalDogData());

    return Requests.postDog(newDog)
      .then(() => console.log("Server dogs updated successfully"))
      .catch((err) => {
        console.log(err);
        //setAllDogs(allDogs);
        refetch();
      })
      .finally(() => {
        setIsLoading(false); //TODO Remove all loading calls from all other functions
      });
  };
  const favoriteDog = (id: number) => {
    const updatedLocalDogData = (idInput: number) => {
      const updatedDogs = allDogs.map((dog) =>
        dog.id === idInput ? { ...dog, isFavorite: true } : dog
      );
      return updatedDogs;
    };

    setAllDogs(updatedLocalDogData(id));

    Requests.patchFavoriteForDog(id, { isFavorite: true })
      .then(() => {
        console.log("Dog has been favorited");
      })
      .catch((err) => {
        console.log(err);
        refetch();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const unFavoriteDog = (id: number) => {
    const updatedLocalDogData = (idInput: number) => {
      const updatedDogs = allDogs.map((dog) =>
        dog.id === idInput ? { ...dog, isFavorite: false } : dog
      );
      return updatedDogs;
    };

    setAllDogs(updatedLocalDogData(id));

    Requests.patchFavoriteForDog(id, { isFavorite: false })
      .then(() => {
        console.log("Dog has been unfavorited");
      })
      .catch((err) => {
        console.log(err);
        refetch();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { refetch, deleteDog, postDog, favoriteDog, unFavoriteDog };
};
