import React, { useState, useEffect } from "react";
import Link from "next/link";
import List from "../components/Catlist/index.js";
import cats from "../lib/cat_data.js";
import Footer from "../components/Footer/index.js";

function AnimalsPage() {
  const [filteredItems, setFilteredItems] = useState(cats);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Lade die Favoritenliste aus dem Local Storage beim ersten Rendern der Seite
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

    // Speichere die aktualisierte Favoritenliste im Local Storage
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleFilter = () => {
    const filteredList = cats.filter((item) => {
      if (
        genderFilter &&
        item.gender.toLowerCase() !== genderFilter.toLowerCase()
      ) {
        return false;
      }

      if (ageFilter) {
        const age = parseInt(item.age);
        if (ageFilter === "0-5" && (age < 0 || age > 5)) {
          return false;
        } else if (ageFilter === "6-10" && (age < 6 || age > 10)) {
          return false;
        } else if (ageFilter === "10+" && age < 11) {
          return false;
        }
      }
      if (locationFilter && item.location !== locationFilter) {
        return false;
      }
      return true;
    });

    setFilteredItems(filteredList);
    setNoResults(filteredList.length === 0);
  };

  return (
    <main>
      <h1>🐾 PfotenPortal 🐾</h1>

      <div>
        <label htmlFor="ageFilter">Alter:</label>
        <select
          id="ageFilter"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="">Alle</option>
          <option value="0-5">0-5 Jahre</option>
          <option value="6-10">6-10 Jahre</option>
          <option value="10+">Älter als 10 Jahre</option>
        </select>
      </div>

      <div>
        <label htmlFor="genderFilter">Geschlecht:</label>
        <select
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">Alle</option>
          <option value="weiblich">Weiblich</option>
          <option value="männlich">Männlich</option>
        </select>
      </div>
      <div>
        <label htmlFor="locationFilter">Standort:</label>
        <select
          id="locationFilter"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Alle</option>
          <option value="Tierheim 1">Tierheim 1</option>
          <option value="Tierheim 2">Tierheim 2</option>
          <option value="Tierheim 3">Tierheim 3</option>
        </select>
      </div>

      <button onClick={handleFilter}>Filter anwenden</button>

      {noResults && <p>Keine Ergebnisse gefunden.</p>}

      {/* Pass the Link component to the List component as a prop */}
      {/* Add a button to allow users to favorite an animal */}
      {filteredItems.map((animal) => (
        <>
          {/* Render the animal using the List component or custom JSX */}
          {/* ... */}
          {/* Add a button to allow users to favorite an animal */}
          <button onClick={() => handleFavorite(animal.id)}>
            {/* Hier können Sie das SVG-Icon einfügen */}
          </button>
        </>
      ))}

      <Link href="/">Zurück</Link>
      <br></br>
      <Footer />
    </main>
  );
}

export default AnimalsPage;
