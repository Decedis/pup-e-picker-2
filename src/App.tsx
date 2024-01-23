import { Section } from "./Components/Section";
import { Dogs } from "./Components/Dogs";
import { LoadingPovider } from "./Providers/LoadingProvider";
import { AllDogsProvider } from "./Providers/AllDogsProvider";

export function App() {
  return (
    <LoadingPovider>
      <AllDogsProvider>
        <div className="App" style={{ backgroundColor: "skyblue" }}>
          <header>
            <h1>pup-e-picker (Functional)</h1>
          </header>
          <Section label={"Dogs: "}>
            <Dogs />
          </Section>
        </div>
      </AllDogsProvider>
    </LoadingPovider>
  );
}
