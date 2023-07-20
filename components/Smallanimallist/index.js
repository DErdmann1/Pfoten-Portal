import Image from "next/image";
import Link from "next/link";
import BookmarkButton from "../Bookmarkbutton";
import styled from "styled-components";

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default function SmallAnimalList({ items, onBookmark, favorites }) {
  const handleBookmark = (itemId, isBookmarked) => {
    let newFavorites;
    if (favorites.includes(itemId)) {
      newFavorites = favorites.filter((favId) => favId !== itemId);
    } else {
      newFavorites = [...favorites, itemId];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    onBookmark(itemId, isBookmarked);
  };

  return (
    <ListContainer>
      {items.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <Image src={item.image} alt={item.name} width={375} height={375} />
          <p>Alter: {item.age}</p>
          <p>Geschlecht: {item.gender}</p>
          <p>Rasse: {item.breed}</p>
          <p>Standort: {item.location}</p>

          <BookmarkButton
            itemId={item.id}
            isBookmarked={favorites.includes(item.id)}
            onBookmark={(isBookmarked) => handleBookmark(item.id, isBookmarked)}
          />

          <Link href={`/moredetails/${item.id}`}>
            <button>Mehr Details..</button>
          </Link>
        </li>
      ))}
    </ListContainer>
  );
}
