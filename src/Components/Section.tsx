import { ReactNode, useContext } from "react";
import { AllDogsContext } from "../Providers/AllDogsProvider";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { allDogs } = useContext(AllDogsContext);

  const favoritedDogs = allDogs.filter((dog) => dog.isFavorite);
  const notFavoritedDogs = allDogs.filter((dog) => !dog.isFavorite);

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${"active"}`}
            onClick={() => {
              alert("click favorited");
            }}
          >
            favorited ( {favoritedDogs.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${""}`}
            onClick={() => {
              alert("click unfavorited");
            }}
          >
            unfavorited ( {notFavoritedDogs.length} )
          </div>
          <div
            className={`selector ${""}`}
            onClick={() => {
              alert("clicked create dog");
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
