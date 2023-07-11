import React, { useState } from "react";
import List from "../components/Doglist/index.js";
import dogs from "../lib/dog_data.js";

function AnimalsPage() {
  const [filteredItems, setFilteredItems] = useState(dogs);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const handleFilter = () => {
    const filteredList = dogs.filter((item) => {
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

      {filteredItems.length === 0 && <p>Keine Ergebnisse gefunden.</p>}

      <List items={filteredItems} />
    </main>
  );
}

export default AnimalsPage;
