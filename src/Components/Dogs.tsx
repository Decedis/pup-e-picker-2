// Right now these dogs are constant, but in reality we should be getting these from our server

import { useContext } from "react";
import { AllDogsContext, AllDogsProvider } from "../Providers/AllDogsProvider";
import { DogCard } from "./DogCard";

// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
export const Dogs = () =>
  // no props allowed
  {
    const { allDogs, setAllDogs } = useContext(AllDogsContext);

    return (
      //Use Dog Provider HERE
      <AllDogsProvider>
        {allDogs.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            onEmptyHeartClick={}
            onHeartClick={}
            onTrashIconClick={}
            isLoading={false}
          />
        ))}
      </AllDogsProvider>
    );
  };
