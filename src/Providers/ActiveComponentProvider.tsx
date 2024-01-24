import { ReactNode, createContext, useState } from "react";
import { ActiveComponent } from "../types";

type TActiveComponentContext = {
  activeComponent: ActiveComponent;
  setActiveComponent: (input: ActiveComponent) => void;
};

export const ActiveComponentContext = createContext<TActiveComponentContext>({
  activeComponent: "all",
  setActiveComponent: () => {
    throw new Error("ActiveComponent not implemented");
  },
});

export const ActiveComponentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("all");
  return (
    <ActiveComponentContext.Provider
      value={{ activeComponent, setActiveComponent }}
    >
      {children}
    </ActiveComponentContext.Provider>
  );
};
