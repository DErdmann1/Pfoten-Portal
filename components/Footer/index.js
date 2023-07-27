import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  text-align: center;
  border-top: 1px solid black;
  background-color: #987554;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
`;

const Copyright = styled.p`
  color: black;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>home</title>
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      </Link>
      <Link href="/favorites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </Link>
      <Copyright>©PfotenPortal</Copyright>
    </StyledFooter>
  );
}
