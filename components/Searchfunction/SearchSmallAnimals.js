import React, { useState } from "react";

export default function SearchSmallAnimals({ onSearch }) {
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
        placeholder="Suche nach Kleintieren"
      />
      <button onClick={handleSearch}>Suchen</button>
    </div>
  );
}
