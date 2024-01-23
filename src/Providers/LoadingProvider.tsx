import { ReactNode, createContext, useState } from "react";

type TLoadingContext = {
  isLoading: boolean;
  setIsLoading: (input: boolean) => void;
};
export const LoadingContext = createContext<TLoadingContext>({
  isLoading: false,
  setIsLoading: () => {
    throw new Error("setIsLoading is not implemented");
  },
});

export const LoadingPovider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
