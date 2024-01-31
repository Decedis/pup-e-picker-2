import { useCallback, useContext } from "react";
import { LoadingContext } from "./Providers/LoadingProvider";
import { AllDogsContext } from "./Providers/AllDogsProvider";
import { Requests } from "./api";
import { Dog } from "./types";

export const useServerActions = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setAllDogs } = useContext(AllDogsContext);



  const refetch = useCallback(() => { //TODO consider refactoring
    setIsLoading(true);
    Requests.getAllDogs()
      .then(setAllDogs)
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setAllDogs]);

  const deleteDog = (id: number) => {
    setIsLoading(true);
    Requests.deleteDogRequest(id)
      .then(refetch)
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const postDog = (newDog: Omit<Dog, "id">) => {
    setIsLoading(true);
    return Requests.postDog(newDog)
      .then(refetch)
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const favoriteDog = (id: number) => {
    setIsLoading(true);
    Requests.patchFavoriteForDog(id, { isFavorite: true })
      .then(refetch)
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const unFavoriteDog = (id: number) => {
    setIsLoading(true);
    Requests.patchFavoriteForDog(id, { isFavorite: false })
      .then(refetch)
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { refetch, deleteDog, postDog, favoriteDog, unFavoriteDog };
};
