import Image from "next/image";
import Link from "next/link";
import BookmarkButton from "../Bookmarkbutton"; // Importieren Sie hier alle Tierdaten

export default function List({ items }) {
  const handleBookmark = (itemId, isBookmarked) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isBookmarked) {
      favorites.push(itemId);
    } else {
      favorites = favorites.filter((favId) => favId !== itemId);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <Image src={item.image} alt={item.name} width={500} height={500} />
          <p>Alter: {item.age}</p>
          <p>Geschlecht: {item.gender}</p>
          <p>Rasse: {item.breed}</p>
          <p>Standort: {item.location}</p>

          <BookmarkButton
            onBookmark={(isBookmarked) => handleBookmark(item.id, isBookmarked)}
          />

          <Link href={`/moredetails/${item.id}`}>
            <button>Mehr Details..</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
