import React, { useState } from "react";
import Link from "next/link";
import List from "../components/Smallanimallist/index.js";
import smallanimals from "../lib/smallanimals_data.js";
import Footer from "../components/Footer/index.js";
import BookmarkButton from "../../components/Bookmarkbutton/index.js";

function AnimalsPage() {
  const [filteredItems, setFilteredItems] = useState(smallanimals);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleFilter = () => {
    const filteredList = smallanimals.filter((item) => {
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

      <List items={filteredItems} />

      <Link href="/">Zurück</Link>
      <br></br>
      <Footer />
    </main>
  );
}

export default AnimalsPage;
