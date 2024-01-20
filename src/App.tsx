import { useEffect, useState } from "react";
import { Section } from "./Components/Section";
import { Dog } from "./types";
import { Requests } from "./api";
import { Dogs } from "./Components/Dogs";

export function App() {
  const [allDogs, setAllDogs] = useState<Dog[]>([]); //TODO turn into a provider
  const [isLoading, setIsLoading] = useState<boolean>(false); //TODO globalize

  const refetch = () => {
    setIsLoading(true);
    Requests.getAllDogs()
      .then(setAllDogs)
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={"Dogs: "}>
        <Dogs />
      </Section>
    </div>
  );
}
