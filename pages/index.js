import Footer from "../components/Footer/index.js";
import Header from "../components/Header/index.js";
import styled from "styled-components";
import SvgIcon from "../components/Icons/index.js";

const StyledHeader = styled.header`
  background-color: #987554;
  width: 100%;
  padding: 1px;
  text-align: center;
  border-bottom: 1px solid black;
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
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  margin-top: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-top: -10px;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <StyledHomePage>
        <Button href="/dogs">
          <IconContainer>
            <SvgIcon variant="dog" />
            Zu unseren Hunden
          </IconContainer>
        </Button>
        <Button href="/cats">
          <IconContainer>
            <SvgIcon variant="cat" />
            Zu unseren Katzen
          </IconContainer>
        </Button>
        <Button href="/smallanimals">
          <IconContainer>
            <SvgIcon variant="smallanimal" />
            Zu unseren Kleintieren
          </IconContainer>
        </Button>
        <Footer />
      </StyledHomePage>
    </>
  );
}
