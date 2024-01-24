import { useContext } from "react";
import { CreateDogForm } from "./Components/CreateDogForm.tsx";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { ActiveComponentContext } from "./Providers/ActiveComponentProvider.tsx";
import { AllDogsProvider } from "./Providers/AllDogsProvider";
import { LoadingPovider } from "./Providers/LoadingProvider";

export function App() {
  const { activeComponent } = useContext(ActiveComponentContext);

  return (
    <LoadingPovider>
      <AllDogsProvider>
        <div className="App" style={{ backgroundColor: "skyblue" }}>
          <header>
            <h1>pup-e-picker (Functional)</h1>
          </header>
          <Section label={"Dogs: "}>
            {activeComponent === "create" ? <CreateDogForm /> : <Dogs />}
          </Section>
        </div>
      </AllDogsProvider>
    </LoadingPovider>
  );
}
