import { ReactNode, useContext } from "react";
import { AllDogsContext } from "../Providers/AllDogsProvider";
import { ActiveComponentContext } from "../Providers/ActiveComponentProvider.tsx";
import { ActiveComponent } from "../types.ts";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { allDogs } = useContext(AllDogsContext);
  const { activeComponent, setActiveComponent } = useContext(
    ActiveComponentContext
  );

  const favoritedDogs = allDogs.filter((dog) => dog.isFavorite);
  const notFavoritedDogs = allDogs.filter((dog) => !dog.isFavorite);

  const toggleActiveView = (targetView: ActiveComponent) => {
    return targetView === activeComponent
      ? setActiveComponent("all")
      : setActiveComponent(targetView);
  };
  const activeButtonSwitcher = (
    thisButton: ActiveComponent,
    activeButton: ActiveComponent
  ): string => {
    return thisButton === activeButton ? `selector active` : `selector`;
  };
  console.log("ActiveComponent: ", activeComponent);
  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            //className={`selector ${"active"}`}
            className={activeButtonSwitcher("favorited", activeComponent)}
            onClick={() => {
              toggleActiveView("favorited");
            }}
          >
            favorited ( {favoritedDogs.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            //className={`selector ${""}`}
            className={activeButtonSwitcher("unfavorited", activeComponent)}
            onClick={() => {
              toggleActiveView("unfavorited");
            }}
          >
            unfavorited ( {notFavoritedDogs.length} )
          </div>
          <div
            //            className={`selector ${""}`}
            className={activeButtonSwitcher("create", activeComponent)}
            onClick={() => {
              toggleActiveView("create");
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
