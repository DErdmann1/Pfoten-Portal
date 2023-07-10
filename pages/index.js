import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>🐾 PfotenPortal 🐾</h1>
      <Link href="/animals">Zur Pfotenseite </Link>
    </div>
  );
}
