import { useState, useEffect } from "react";
import Link from "next/link";
import DogList from "../components/Doglist/index.js";
import dogs from "../lib/dog_data.js";
import Footer from "../components/Footer/index.js";
import StyledHeader from "../components/Header";
import styled from "styled-components";
import SearchDogs from "../components/Searchfunction/SearchDogs.js";

const StyledMain = styled.main`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterOption = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  width: 100px;
  margin: 5px;
`;

const ToggleButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export default function DogsPage() {
  const [filteredItems, setFilteredItems] = useState(dogs);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterExpanded, setFilterExpanded] = useState(false);

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

  const handleToggleFilter = () => {
    setFilterExpanded(!filterExpanded);
  };

  return (
    <StyledMain>
      <StyledHeader />
      <SearchDogs onSearch={handleSearch} />
      <ToggleButton onClick={handleToggleFilter}>
        {filterExpanded ? "Filter ausblenden" : "Filter anzeigen"}
      </ToggleButton>
      {filterExpanded && (
        <FilterContainer>
          <FilterLabel htmlFor="ageFilter">Alter:</FilterLabel>
          <FilterOption
            id="ageFilter"
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          >
            <option value="">Alle</option>
            <option value="0-5">0-5 Jahre</option>
            <option value="6-10">6-10 Jahre</option>
            <option value="10+">Älter als 10 Jahre</option>
          </FilterOption>
          <FilterLabel htmlFor="genderFilter">Geschlecht:</FilterLabel>
          <FilterOption
            id="genderFilter"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">Alle</option>
            <option value="weiblich">Weiblich</option>
            <option value="männlich">Männlich</option>
          </FilterOption>
          <FilterLabel htmlFor="locationFilter">Standort:</FilterLabel>
          <FilterOption
            id="locationFilter"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">Alle</option>
            <option value="Tierheim 1">Tierheim 1</option>
            <option value="Tierheim 2">Tierheim 2</option>
            <option value="Tierheim 3">Tierheim 3</option>
          </FilterOption>
          <button onClick={handleFilter}>Filter anwenden</button>
        </FilterContainer>
      )}
      {noResults && <p>Keine Ergebnisse gefunden.</p>}
      <DogList
        items={filteredItems}
        onBookmark={handleBookmark}
        isBookmarked={(itemId) => favorites.includes(itemId)}
      />
      <Link href="/">Zurück</Link>
      <br />
      <Footer />
    </StyledMain>
  );
}
