import Image from "next/image";
import Link from "next/link";
import BookmarkButton from "../Bookmarkbutton";
import styled from "styled-components";

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SmallanimalImage = styled(Image)`
  display: block;
  margin: 5px auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  max-width: 300px;
  max-height: 300px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export default function SmallAnimalList({ items, onBookmark, isBookmarked }) {
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
        <ListItem key={item.id}>
          <h3>{item.name}</h3>
          <SmallanimalImage
            src={item.image}
            alt={item.name}
            width={375}
            height={375}
          />
          <p>Alter: {item.age}</p>
          <p>Geschlecht: {item.gender}</p>
          <p>Rasse: {item.breed}</p>
          <p>Standort: {item.location}</p>

          <ButtonContainer>
            <BookmarkButton
              itemId={item.id}
              onBookmark={(isBookmarked) =>
                handleBookmark(item.id, isBookmarked)
              }
              isBookmarked={isBookmarked(item.id)}
            />

            <Link href={`/moredetails/${item.id}`}>
              <button>Mehr Details..</button>
            </Link>
          </ButtonContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
}
