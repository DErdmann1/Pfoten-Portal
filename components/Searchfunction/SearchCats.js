import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 180px;
`;

export default function SearchCats({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={input}
        onChange={handleSearch}
        placeholder="Suche nach Katzen.."
      />
    </SearchContainer>
  );
}
