import React from "react";
import styled from "styled-components";
import DogCard from "./DogCard";
import dogs from "../lib/dog_data";

const Container = styled.div`
  padding-bottom: 60px;
`;

export default function SearchDogs() {
  return (
    <Container>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </Container>
  );
}
