import { useEffect, useState } from "react";
import { Section } from "./Components/Section";

import { Requests } from "./api";
import { Dogs } from "./Components/Dogs";
import { AllDogsProvider } from "./Providers/AllDogsProvider";
import { LoadingPovider } from "./Providers/LoadingProvider";

export function App() {
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
    <AllDogsProvider>
      <LoadingPovider>
        <div className="App" style={{ backgroundColor: "skyblue" }}>
          <header>
            <h1>pup-e-picker (Functional)</h1>
          </header>
          <Section label={"Dogs: "}>
            <Dogs />
          </Section>
        </div>
      </LoadingPovider>
    </AllDogsProvider>
  );
}
