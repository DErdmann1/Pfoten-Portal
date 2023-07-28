import styled from "styled-components";

const StyledSvg = styled.svg`
  cursor: pointer;
`;

export default function BookmarkButton({ itemId, isBookmarked, onBookmark }) {
  const handleClick = () => {
    onBookmark(itemId, !isBookmarked);
  };

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      onClick={handleClick}
    >
      <title>star</title>
      <path
        fill={isBookmarked ? "#000000" : "none"}
        stroke={isBookmarked ? "#000000" : "#000000"}
        strokeWidth="2"
        d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2l-2.81 6.62-7.19.62 4.64 4.73-1.64 7.03z"
      />
    </StyledSvg>
  );
}
