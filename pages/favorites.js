import { useState, useEffect } from "react";
import Link from "next/link";
import cats from "../lib/cat_data.js";
import dogs from "../lib/dog_data.js";
import smallanimals from "../lib/smallanimals_data.js";
import Footer from "../components/Footer/index.js";
import Image from "next/image";

import styled from "styled-components";
import StyledHeader from "../components/Header/index.js";

const StyledMain = styled.main`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  display: block;
  margin: 5px auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  max-width: 300px;
  max-height: 300px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 30px;
  margin-bottom: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 35px;
`;

const BookmarkBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MoreDetailsBtn = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
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

      <ul>
        {favoriteAnimals.map((animal) => (
          <ListItem key={animal.id}>
            <h3>{animal.name}</h3>
            <Link href={`/moredetails/${animal.id}`}>
              <p>
                <StyledImage
                  src={animal.image}
                  alt={animal.name}
                  width={375}
                  height={375}
                />
              </p>
            </Link>
            <p>Alter: {animal.age}</p>
            <p>Geschlecht: {animal.gender}</p>
            <p>Rasse: {animal.breed}</p>
            <p>Standort: {animal.location}</p>
            <ButtonContainer>
              <BookmarkBtn
                itemId={animal.id}
                isBookmarked={favorites.includes(animal.id)}
                onBookmark={() => handleBookmark(animal.id)}
              />
              <Link href={`/moredetails/${animal.id}`}>
                <MoreDetailsBtn>Mehr Details..</MoreDetailsBtn>
              </Link>
            </ButtonContainer>
          </ListItem>
        ))}
      </ul>
      <Footer />
    </StyledMain>
  );
}
