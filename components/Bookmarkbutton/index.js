import { useState, useEffect } from "react";

export default function BookmarkButton({ itemId, onBookmark }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Lese den aktuellen Lesezeichenstatus des Tieres aus dem Local Storage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsBookmarked(favorites.includes(itemId));
  }, [itemId]);

  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(itemId, !isBookmarked);
  };

  return (
    <button onClick={handleClick}>
      {isBookmarked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>bookmark</title>
          <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>bookmark_border</title>
          <path d="M17,5V19L12,16.5L7,19V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5M17,1H7A4,4 0 0,0 3,5V21L12,17.5L21,21V5A4,4 0 0,0 17,1Z" />
        </svg>
      )}
    </button>
  );
}
