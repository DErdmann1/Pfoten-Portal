import { useState, useEffect } from "react";
import Link from "next/link";
import cats from "../lib/cat_data.js";
import dogs from "../lib/dog_data.js";
import smallanimals from "../lib/smallanimals_data.js";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer/index.js";
import Image from "next/image";

const StyledFavoritesPage = styled.div`
  padding-bottom: 60px;
`;

const StyledCard = styled.div`
  border: 3px solid grey;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
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

  const handleFavorite = (id) => {
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
    <StyledFavoritesPage>
      <Header />
      <h1>Favoriten</h1>
      <ul>
        {favoriteAnimals.map((animal) => (
          <StyledCard key={animal.id}>
            <h3>{animal.name}</h3>
            <Link href={`/moredetails/${animal.id}`}>
              <p>
                <Image
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
            <button onClick={() => handleFavorite(animal.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <title>bookmark</title>
                <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3Z" />
              </svg>
            </button>
            <Link href={`/moredetails/${animal.id}`}>
              <button>Mehr Details..</button>
            </Link>
          </StyledCard>
        ))}
      </ul>
      <Footer />
    </StyledFavoritesPage>
  );
}
