import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #987554;
  padding: 20px;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid black;
  height: 100px;
  margin-bottom: 15px;
`;

const Logo = styled.h1`
  font-size: 32px;
  color: #black;
  font-family: "Arial", sans-serif;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-family: "Arial", sans-serif;
  margin: 5px 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo>🐾 PfotenPortal 🐾</Logo>
      <Subtitle>Finde dein perfektes Haustier</Subtitle>
    </StyledHeader>
  );
}
