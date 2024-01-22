import { ReactNode, createContext, useState } from "react";
import { Dog } from "../types";

type TAllDogs = {
  allDogs: Dog[];
  setAllDogs: (input: Dog[]) => void;
};
export const AllDogsContext = createContext<TAllDogs>({
  allDogs: [],
  setAllDogs: (dogs: Dog[]): Dog[] => dogs,
});

export const AllDogsProvider = ({ children }: { children: ReactNode }) => {
  const [allDogs, setAllDogs] = useState<Dog[]>([]);
  return (
    <AllDogsContext.Provider value={{ allDogs, setAllDogs }}>
      {children}
    </AllDogsContext.Provider>
  );
};
