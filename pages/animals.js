import React from "react";
import List from "../components/Animallist/index.js";
import animals from "../lib/data/animals";

function AnimalsPage() {
  const [filteredItems, setFilteredItems] = useState(animals);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  const handleFilter = () => {
    const filteredList = dogs.filter((item) => {
      if (genderFilter && item.gender !== genderFilter) {
        return false;
      }

      if (ageFilter) {
        const age = parseInt(item.age);
        if (ageFilter === "0-5" && (age < 0 || age > 5)) {
          return false; // Überspringe das Item, wenn das Alter nicht im Bereich von 0-5 liegt
        } else if (ageFilter === "6-10" && (age < 6 || age > 10)) {
          return false; // Überspringe das Item, wenn das Alter nicht im Bereich von 6-10 liegt
        } else if (ageFilter === "10+" && age < 11) {
          return false; // Überspringe das Item, wenn das Alter kleiner als 11 ist
        }
      }

      return true; // Das Item entspricht allen ausgewählten Filterkriterien
    });

    setFilteredItems(filteredList);
  };

  return (
    <main>
      <h1>🐾 PfotenPortal 🐾</h1>

      <div>
        <label htmlFor="ageFilter">Alter:</label>
        <input
          type="text"
          id="ageFilter"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="genderFilter">Geschlecht:</label>
        <input
          type="text"
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        />
      </div>

      <button onClick={handleFilter}>Filter anwenden</button>

      <List items={filteredItems} />
    </main>
  );
}

export default AnimalsPage;
