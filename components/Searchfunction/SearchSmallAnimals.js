import React from "react";
import styled from "styled-components";
import SmallAnimalCard from "./SmallAnimalCard";
import smallanimals from "../lib/smallanimals_data";

const Container = styled.div`
  padding-bottom: 60px;
`;

export default function SearchSmallAnimals() {
  return (
    <Container>
      {smallanimals.map((animal) => (
        <SmallAnimalCard key={animal.id} animal={animal} />
      ))}
    </Container>
  );
}
