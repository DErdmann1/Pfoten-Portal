import { useState, useEffect } from "react";
import Link from "next/link";
import DogList from "../components/Doglist/index.js";
import dogs from "../lib/dog_data.js";
import Footer from "../components/Footer/index.js";
import Header from "../components/Header";
import styled from "styled-components";
import SearchDogs from "../components/Searchfunction/SearchDogs.js";

const StyledMain = styled.main`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DogsPage() {
  const [filteredItems, setFilteredItems] = useState(dogs);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleBookmark = (id) => {
    let newFavorites;
    if (favorites.includes(id)) {
      newFavorites = favorites.filter((favId) => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleSearch = (input) => {
    setSearchInput(input);
    if (input === "") {
      setFilteredItems(dogs);
      setNoResults(false);
      return;
    }
    const filteredList = dogs.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredItems(filteredList);
    setNoResults(filteredList.length === 0);
  };

  const handleFilter = () => {
    let filteredList = dogs.filter((item) => {
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

    if (searchInput !== "") {
      filteredList = filteredList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setFilteredItems(filteredList);
    setNoResults(filteredList.length === 0);
  };

  return (
    <StyledMain>
      <Header />
      <h1>🐾 PfotenPortal 🐾</h1>

      <SearchDogs onSearch={handleSearch} />

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

      <DogList
        items={filteredItems}
        onBookmark={handleBookmark}
        favorites={favorites}
      />

      <Link href="/">Zurück</Link>
      <br />
      <Footer />
    </StyledMain>
  );
}
