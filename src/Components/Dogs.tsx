// Right now these dogs are constant, but in reality we should be getting these from our server

import { useContext, useEffect } from "react";
import { AllDogsContext } from "../Providers/AllDogsProvider";
import { DogCard } from "./DogCard";
import { LoadingContext } from "../Providers/LoadingProvider";
import { useServerActions } from "../useServerActions";

// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
export const Dogs = () =>
  // no props allowed
  {
    const { allDogs } = useContext(AllDogsContext);
    const { isLoading } = useContext(LoadingContext);
    const { refetch, favoriteDog, unFavoriteDog, deleteDog } =
      useServerActions();

    useEffect(() => {
      refetch();
      console.log("Refetch called");
    }, []);
    return (
      //Use Dog Provider HERE
      <>
        {allDogs.map((dog) => (
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
