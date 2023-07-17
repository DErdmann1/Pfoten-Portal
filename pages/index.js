import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer/index.js";

export default function HomePage() {
  return (
    <main>
      <header>
        <Link href="/">
          <Image src="/images/logo1.png" alt="Logo" width={200} height={100} />
        </Link>
      </header>
      <h1>🐾 PfotenPortal 🐾</h1>
      <Link href="/dogs">Zu unseren Hunden</Link>
      <Link href="/cats">Zu unseren Katzen</Link>
      <Link href="/smallanimals">Zu unseren Kleintieren</Link>
      <Footer />
    </main>
  );
}
