import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #987554;
  padding: 20px;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid black;
  position: relative;
`;

const Logo = styled.p`
  font-size: 24px;
  color: white;
  width: 100%;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 5px;
  display: ${(props) => (props.isSearchOpen ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;

const MagnifyIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  fill: black;
  cursor: pointer;
`;

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Hier kannst du weitere Logik zur Filterung der Suchergebnisse hinzufügen
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <StyledHeader>
      <Link href="/">
        <Logo onClick={toggleSearch}>🐾 PfotenPortal 🐾</Logo>
      </Link>
      <MagnifyIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={toggleSearch}
      >
        <title>magnify</title>
        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </MagnifyIcon>
      <SearchInput
        type="text"
        placeholder="Suche..."
        value={searchTerm}
        onChange={handleSearch}
        isSearchOpen={isSearchOpen}
      />
    </StyledHeader>
  );
}
