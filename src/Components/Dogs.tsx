// Right now these dogs are constant, but in reality we should be getting these from our server

import { useContext, useEffect } from "react";
import { AllDogsContext } from "../Providers/AllDogsProvider";
import { DogCard } from "./DogCard";
import { LoadingContext } from "../Providers/LoadingProvider";
import { useServerActions } from "../useServerActions";
import { ActiveComponentContext } from "../Providers/ActiveComponentProvider.tsx";
import { ActiveComponent } from "../types.ts";

// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
export const Dogs = () =>
  // no props allowed
  {
    const { allDogs } = useContext(AllDogsContext);
    const { isLoading } = useContext(LoadingContext);
    const { activeComponent } = useContext(ActiveComponentContext);
    const { refetch, favoriteDog, unFavoriteDog, deleteDog } =
      useServerActions();

    const dogsToDisplay = (viewableDogs: ActiveComponent) => {
      if (viewableDogs === "all") {
        return allDogs;
      } else if (viewableDogs === "favorited") {
        const favoritedDogs = allDogs.filter((dog) => dog.isFavorite);
        return favoritedDogs;
      } else if (viewableDogs === "unfavorited") {
        const unFavoritedDogs = allDogs.filter((dog) => !dog.isFavorite);
        return unFavoritedDogs;
      }
    };
    useEffect(() => {
      refetch();
      console.log("Refetch called");
    }, []);
    return (
      //Use Dog Provider HERE
      <>
        {dogsToDisplay(activeComponent)?.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            onEmptyHeartClick={() => favoriteDog(dog.id)}
            onHeartClick={() => unFavoriteDog(dog.id)}
            onTrashIconClick={() => deleteDog(dog.id)}
            isLoading={isLoading}
          />
        ))}
      </>
    );
  };
