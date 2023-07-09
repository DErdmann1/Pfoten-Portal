import React from "react";
import dogs from "../lib/data";
import List from "../components/animallist/index.js";

const DogsPage = () => {
  return (
    <div>
      <h1>🐾 PfotenPortal 🐾</h1>
      <List items={dogs} />
    </div>
  );
};

export default DogsPage;
