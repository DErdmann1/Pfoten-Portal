import React, { useState } from "react";

export default function SearchDogs({ onSearch }) {
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
        placeholder="Suche nach Hunden"
      />
      <button onClick={handleSearch}>Suchen</button>
    </div>
  );
}
