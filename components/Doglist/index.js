import Link from "next/link";
import BookmarkButton from "../Bookmarkbutton";
import Image from "next/image";
import styled from "styled-components";

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DogImage = styled(Image)`
  display: block;
  margin: 25px auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
  max-height: 300px;
`;

export default function DogList({ items, onBookmark, isBookmarked }) {
  const handleBookmark = (itemId, isBookmarked) => {
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
          <DogImage src={item.image} alt={item.name} width={375} height={375} />
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
