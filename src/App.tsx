import { useEffect, useContext } from "react";
import { Section } from "./Components/Section";
import { Requests } from "./api";
import { Dogs } from "./Components/Dogs";
import { AllDogsContext, AllDogsProvider } from "./Providers/AllDogsProvider";
import { LoadingContext, LoadingPovider } from "./Providers/LoadingProvider";

export function App() {
  const { allDogs, setAllDogs } = useContext(AllDogsContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

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
