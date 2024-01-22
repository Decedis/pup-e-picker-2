import { Dog } from "./types";

const baseURL = "http://localhost:3000";

const getAllDogs = (): Promise<Dog[]> => {
  //getAllDogs: (): Promise<Dog[]> => {
  return fetch(baseURL + "/dogs").then((res) => res.json()) as Promise<Dog[]>;
};

const postDog = () => {
  // fill out method
};
const deleteDogRequest = () => {
  // fill out method
};

const patchFavoriteForDog = () => {
  // fill out method
};

export const Requests = {
  postDog,
  deleteDogRequest,
  patchFavoriteForDog,
  getAllDogs,
};
