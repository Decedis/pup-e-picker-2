import { Dog } from "./types";

const baseURL = "http://localhost:3000";

const getAllDogs = (): Promise<Dog[]> => {
  //getAllDogs: (): Promise<Dog[]> => {
  return fetch(baseURL + "/dogs").then((res) => res.json()) as Promise<Dog[]>;
};

const postDog = async (dog: Omit<Dog, "id" | "isFavorite">) => {
  // fill out method
  const res = await fetch(baseURL + "/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  });
  return (await res.json()) as Promise<Dog[]>; //TODO update to match param sig
};
const deleteDogRequest = (id: number) => {
  return fetch(`${baseURL}/dogs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const patchFavoriteForDog = (id: number, newData: Partial<Dog>) => {
  // fill out method
  return fetch(`${baseURL}"/dogs/"${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...newData }),
  });
};

export const Requests = {
  postDog,
  deleteDogRequest,
  patchFavoriteForDog,
  getAllDogs,
};
