import React from "react";
import Link from "next/link";
import Footer from "../components/Footer/index.js";
import Header from "../components/Header";
import styled from "styled-components";

const StyledHomePage = styled.main`
  padding-bottom: 60px; /* Hier den gewünschten Abstand einstellen */
`;

export default function HomePage() {
  return (
    <StyledHomePage>
      <Header />
      <h1>🐾 PfotenPortal 🐾</h1>
      <Link href="/dogs">Zu unseren Hunden</Link>
      <Link href="/cats">Zu unseren Katzen</Link>
      <Link href="/smallanimals">Zu unseren Kleintieren</Link>
      <Footer />
    </StyledHomePage>
  );
}
