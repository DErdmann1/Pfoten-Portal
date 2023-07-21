import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #987554;
  padding: 20px;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid black;
`;

const Logo = styled.p`
  font-size: 24px;
  color: black;
  width: 100%;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <Logo>🐾 PfotenPortal 🐾</Logo>
      </Link>
    </StyledHeader>
  );
}
