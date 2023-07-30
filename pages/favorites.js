import { useState, useEffect } from "react";
import Link from "next/link";
import cats from "../lib/cat_data.js";
import dogs from "../lib/dog_data.js";
import smallanimals from "../lib/smallanimals_data.js";
import Footer from "../components/Footer/index.js";
import Image from "next/image";

import styled from "styled-components";
import StyledHeader from "../components/Header/index.js";
import FavoritesList from "../components/Favoritelist/index.js";

const StyledMain = styled.main`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const animals = [...cats, ...dogs, ...smallanimals];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

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

  const favoriteAnimals = animals.filter((animal) =>
    favorites.includes(animal.id)
  );

  return (
    <StyledMain>
      <StyledHeader />

      <FavoritesList
        items={favoriteAnimals}
        onBookmark={handleBookmark}
        isBookmarked={(id) => favorites.includes(id)}
      />

      <Footer />
    </StyledMain>
  );
}
