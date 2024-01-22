import { ReactNode, createContext, useState } from "react";

type TLoadingContext = {
  isLoading: boolean;
  setIsLoading: (input: boolean) => void;
};
const LoadingContext = createContext<TLoadingContext>({
  isLoading: false,
  setIsLoading: (loadingState: boolean): boolean => loadingState,
});

export const LoadingPovider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
