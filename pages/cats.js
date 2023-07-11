import React, { useState } from "react";
import List from "../components/Catlist/index.js";
import cats from "../lib/cat_data.js";

function AnimalsPage() {
  const [filteredItems, setFilteredItems] = useState(cats);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const handleFilter = () => {
    const filteredList = cats.filter((item) => {
      if (genderFilter && item.gender !== genderFilter) {
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
          <option value="Berlin">Tierheim 1</option>
          <option value="München">Tierheim 2</option>
          <option value="München">Tierheim 3</option>
        </select>
      </div>

      <button onClick={handleFilter}>Filter anwenden</button>

      <List items={filteredItems} />
    </main>
  );
}

export default AnimalsPage;
