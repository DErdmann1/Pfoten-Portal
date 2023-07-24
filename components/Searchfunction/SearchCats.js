import React, { useState } from "react";

export default function SearchCats({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Suche nach Katzen"
      />
      <button onClick={handleSearch}>Suchen</button>
    </div>
  );
}
