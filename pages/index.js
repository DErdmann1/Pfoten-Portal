import React from "react";
import Link from "next/link";
import Footer from "../components/Footer/index.js";
import Header from "../components/Header";
import styled from "styled-components";

const StyledHomePage = styled.main`
  padding-bottom: 60px;
  background-color: #e5d3b3;
`;

const Button = styled.button`
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #987554;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export default function HomePage() {
  return (
    <StyledHomePage>
      <Header />
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
  );
}
