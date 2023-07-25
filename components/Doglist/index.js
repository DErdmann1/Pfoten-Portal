import Link from "next/link";
import BookmarkButton from "../Bookmarkbutton";
import Image from "next/image";
import styled from "styled-components";

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default function DogList({ items, onBookmark, isBookmarked }) {
  const handleBookmark = (itemId, isBookmarked) => {
    console.log(
      `handleBookmark called with itemId: ${itemId}, isBookmarked: ${isBookmarked}`
    );
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isBookmarked) {
      favorites.push(itemId);
    } else {
      favorites = favorites.filter((favId) => favId !== itemId);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
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
            onBookmark={(isBookmarked) => handleBookmark(item.id, isBookmarked)}
            isBookmarked={isBookmarked(item.id)}
          />

          <Link href={`/moredetails/${item.id}`}>
            <button>Mehr Details..</button>
          </Link>
        </li>
      ))}
    </ListContainer>
  );
}
