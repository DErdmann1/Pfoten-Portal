import React from "react";
import styled from "styled-components";
import CatCard from "./CatCard";
import cats from "../lib/cat_data";

const Container = styled.div`
  padding-bottom: 60px;
`;

export default function SearchCats() {
  return (
    <Container>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </Container>
  );
}
