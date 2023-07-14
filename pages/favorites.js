import { useState, useEffect } from "react";
import cats from "../lib/cat_data.js";
import dogs from "../lib/dog_data.js";
import smallanimals from "../lib/smallanimals_data.js";

const animals = [...cats, ...dogs, ...smallanimals];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Lade die Favoritenliste aus dem Local Storage beim ersten Rendern der Seite
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    console.log(storedFavorites); // Füge diese Zeile hinzu
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

    // Speichere die aktualisierte Favoritenliste im Local Storage
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  console.log(favorites); // Füge diese Zeile hinzu
  const favoriteAnimals = animals.filter((animal) =>
    favorites.includes(animal.id)
  );
  console.log(favoriteAnimals); // Füge diese Zeile hinzu

  return (
    <div>
      <h1>Favoriten</h1>
      <ul>
        {favoriteAnimals.map((animal) => (
          <li key={animal.id}>
            {animal.name}{" "}
            <button onClick={() => handleFavorite(animal.id)}>
              {/* Hier können Sie das SVG-Icon einfügen */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
