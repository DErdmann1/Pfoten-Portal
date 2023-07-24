import styled from "styled-components";

const StyledButton = styled.button`
  /* Hier kannst du das Styling des Buttons anpassen */
`;

export default function BookmarkButton({ itemId, isBookmarked, onBookmark }) {
  const handleClick = () => {
    onBookmark(!isBookmarked);
  };

  return (
    <StyledButton onClick={handleClick}>
      {isBookmarked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>star</title>
          <path
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2l-2.81 6.62-7.19.62 4.64 4.73-1.64 7.03z"
          />
        </svg>
      )}
    </StyledButton>
  );
}
