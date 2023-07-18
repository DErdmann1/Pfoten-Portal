import React from "react";
import Link from "next/link";
import Footer from "../components/Footer/index.js";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #987554;
  width: 100%;
  padding: 20px;
  text-align: center;
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

const Button = styled.button`
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
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeader>
        <Link href="/">
          <Logo>🐾 PfotenPortal 🐾</Logo>
        </Link>
      </StyledHeader>
      <StyledHomePage>
        <h1>🐾 PfotenPortal 🐾</h1>
        <Link href="/dogs">
          <Button>Zu unseren Hunden</Button>
        </Link>
        <Link href="/cats">
          <Button>Zu unseren Katzen</Button>
        </Link>
        <Link href="/smallanimals">
          <Button>Zu unseren Kleintieren</Button>
        </Link>
        <Footer />
      </StyledHomePage>
    </>
  );
}
