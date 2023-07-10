import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>🐾 PfotenPortal 🐾</h1>
      <Link href="/animals">Zur Pfotenseite </Link>
    </main>
  );
}
