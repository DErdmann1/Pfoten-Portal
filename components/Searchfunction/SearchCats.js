import { useState } from "react";

export default function SearchCats({ onSearch }) {
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
        onInput={handleSearch}
        placeholder="Suche nach Katzen"
      />
    </div>
  );
}
