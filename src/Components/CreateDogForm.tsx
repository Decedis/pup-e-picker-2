import React, { useContext, useState } from "react";
import { dogPictures } from "../dog-pictures";
import { useServerActions } from "../useServerActions.tsx";
import { Dog } from "../types.ts";
import toast from "react-hot-toast";
import { LoadingContext } from "../Providers/LoadingProvider.tsx";
import { AllDogsContext } from "../Providers/AllDogsProvider.tsx";

const defaultSelectedImage = dogPictures.BlueHeeler;
const defaultDog = {
  name: "",
  description: "",
  image: defaultSelectedImage,
  isFavorite: false,
};

export const CreateDogForm = () =>
  // no props allowed
  {
    //const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
    const [newDog, setNewDog] = useState<Omit<Dog, "id">>(defaultDog);
    const { allDogs, setAllDogs } = useContext(AllDogsContext);

    const { postDog } = useServerActions();

    const shouldDisable = newDog.description === "" || newDog.name === "";
    const updatedLocalDogData = () => {
      const newLocalDog = { ...newDog, id: allDogs.length };
      return [...allDogs, newLocalDog];
    };
    return (
      <form
        action=""
        id="create-dog-form"
        onSubmit={(e) => {
          e.preventDefault();

          /*
      1. Grab allDogs
      2. Discern the last ID value of the last dog => lastDog
      3. Set the newDog value to a new value that includes lastDog.id + 1
      4. Push this newLocalDog value to the allDogs values
      5. If the postDog function fails, then in the catch section, revert changes.

      Possible problems:
      - In real production, 'guessing' the ID is not ideal. ID generation may then be happening locally. Consider this approach?
      - Maybe the server can generate an ID for the next value, this value can then be stored and used locally. Problem is, this would not scale in a real setting.
      - Consider asking Jon for advice.
      - Consider random ID generation, and rerolling IDs if they incidentally match.

      Jon Meeting and his opinions:
      - Didn't get the chance to talk to him.
      */
          setAllDogs(updatedLocalDogData()); // TODO fix error
          postDog({ ...newDog })
            .then(() => {
              setNewDog(defaultDog);
              return toast.success("Dog has been created");
            })
            .catch(() => {
              return toast.error("Dog could not be created");
            });
        }}
      >
        <h4>Create a New Dog</h4>
        <label htmlFor="name">Dog Name</label>
        <input
          type="text"
          value={newDog.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewDog({ ...newDog, name: e.target.value })
          }
        />
        <label htmlFor="description">Dog Description</label>
        <textarea
          name=""
          id=""
          cols={80}
          rows={10}
          value={newDog.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNewDog({ ...newDog, description: e.target.value })
          }
        ></textarea>
        <label htmlFor="picture">Select an Image</label>
        <select
          id=""
          value={newDog.image}
          onChange={(e) => {
            setNewDog({ ...newDog, image: e.target.value });
          }}
          disabled={shouldDisable}
        >
          {Object.entries(dogPictures).map(([label, pictureValue]) => {
            return (
              <option value={pictureValue} key={pictureValue}>
                {label}
              </option>
            );
          })}
        </select>
        <input type="submit" value="submit" disabled={shouldDisable} />
      </form>
    );
  };
