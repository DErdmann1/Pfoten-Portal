import { useState, useEffect } from "react";
import cats from "../lib/cat_data.js";
import dogs from "../lib/dog_data.js";
import smallanimals from "../lib/smallanimals_data.js";

const animals = [...cats, ...dogs, ...smallanimals];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleFavorite = (id) => {
    let newFavorites;
    if (favorites.includes(id)) {
      newFavorites = favorites.filter((favId) => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const favoriteAnimals = animals.filter((animal) =>
    favorites.includes(animal.id)
  );

  return (
    <div>
      <h1>Favoriten</h1>
      <ul>
        {favoriteAnimals.map((animal) => (
          <li key={animal.id}>
            {animal.name}{" "}
            <button onClick={() => handleFavorite(animal.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <title>bookmark</title>
                <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3Z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
