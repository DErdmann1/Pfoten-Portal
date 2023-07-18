import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #987554;
  margin-top: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <p>🐾 PfotenPortal 🐾</p>
      </Link>
    </StyledHeader>
  );
};

export default Header;
