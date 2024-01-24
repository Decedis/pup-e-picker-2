import { Section } from "./Components/Section";
import { Dogs } from "./Components/Dogs";
import { LoadingPovider } from "./Providers/LoadingProvider";
import { AllDogsProvider } from "./Providers/AllDogsProvider";
import { ActiveComponentProvider } from "./Providers/ActiveComponentProvider.tsx";

export function App() {
  return (
    <LoadingPovider>
      <AllDogsProvider>
        <ActiveComponentProvider>
          <div className="App" style={{ backgroundColor: "skyblue" }}>
            <header>
              <h1>pup-e-picker (Functional)</h1>
            </header>
            {
              // Section and Dogs are the sole components in App.
            }
            <Section label={"Dogs: "}>
              <Dogs />
            </Section>
          </div>
        </ActiveComponentProvider>
      </AllDogsProvider>
    </LoadingPovider>
  );
}
