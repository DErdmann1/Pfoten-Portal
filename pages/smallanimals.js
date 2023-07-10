import React, { useState } from "react";
import List from "../components/Smallanimallist/index.js";
import smallanimals from "../lib/smallanimals_data.js";

function AnimalsPage() {
  const [filteredItems, setFilteredItems] = useState(smallanimals);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  const handleFilter = () => {
    const filteredList = smallanimals.filter((item) => {
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

      <button onClick={handleFilter}>Filter anwenden</button>

      <List items={filteredItems} />
    </main>
  );
}

export default AnimalsPage;
