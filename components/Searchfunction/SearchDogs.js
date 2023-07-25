import { useState } from "react";

export default function SearchDogs({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onInput={handleSearch}
        placeholder="Suche nach Hunden"
      />
    </div>
  );
}
