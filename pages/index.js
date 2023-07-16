import Link from "next/link";
import Footer from "../components/Footer/index.js";

export default function HomePage() {
  return (
    <main>
      <h1>🐾 PfotenPortal 🐾</h1>
      <Link href="/dogs">Zu unseren Hunden </Link>
      <Link href="/cats">Zu unseren Katzen </Link>
      <Link href="/smallanimals">Zu unseren Kleintieren </Link>
      <Footer />
    </main>
  );
}
