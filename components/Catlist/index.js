import Link from "next/link";
import BookmarkButton from "../Bookmarkbutton";
import Image from "next/image";
import styled from "styled-components";
const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CatImage = styled(Image)`
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
  border: 1px solid #ddd;
  border-radius: 8px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 30px;
  margin-bottom: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 35px;
`;

const BookmarkBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MoreDetailsBtn = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

export default function Catlist({ items, onBookmark, isBookmarked }) {
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
          <CatImage src={item.image} alt={item.name} width={375} height={375} />
          <p>Alter: {item.age}</p>
          <p>Geschlecht: {item.gender}</p>
          <p>Rasse: {item.breed}</p>
          <p>Standort: {item.location}</p>

          <ButtonContainer>
            <BookmarkBtn
              onClick={() => handleBookmark(item.id, !isBookmarked(item.id))}
            >
              <BookmarkButton
                itemId={item.id}
                isBookmarked={isBookmarked(item.id)}
                onBookmark={handleBookmark}
              />
            </BookmarkBtn>

            <Link href={`/moredetails/${item.id}`}>
              <MoreDetailsBtn>Mehr Details..</MoreDetailsBtn>
            </Link>
          </ButtonContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
}
