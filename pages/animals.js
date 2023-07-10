import React from "react";
import animals from "../lib/data.js";
import List from "../components/Animallist/index.js";

function AnimalsPage() {
  return (
    <main>
      <h1>🐾 PfotenPortal 🐾</h1>

      <List items={dogs} />
    </main>
  );
}

export default AnimalsPage;
