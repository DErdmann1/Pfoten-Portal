import Footer from "../components/Footer/index.js";
import styled from "styled-components";
import DogIcon from "../components/Icons/DogIcon.js";
import CatIcon from "../components/Icons/CatIcon.js";
import SmallanimalIcon from "../components/Icons/SmallanimalIcon.js";

const StyledHeader = styled.header`
  background-color: #987554;
  width: 100%;
  padding: 1px;
  text-align: center;
  border-bottom: 2px solid black;
`;

const Logo = styled.p`
  font-size: 24px;
  color: black;
`;

const StyledHomePage = styled.main`
  padding-bottom: 60px;
  background-color: #e5d3b3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #987554;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeader>
        <h1>🐾 PfotenPortal 🐾</h1>
      </StyledHeader>
      <StyledHomePage>
        <Button href="/dogs">
          <DogIcon />
          Zu unseren Hunden
        </Button>
        <Button href="/cats">
          <CatIcon />
          Zu unseren Katzen
        </Button>
        <Button href="/smallanimals">
          <SmallanimalIcon />
          Zu unseren Kleintieren
        </Button>
        <Footer />
      </StyledHomePage>
    </>
  );
}
