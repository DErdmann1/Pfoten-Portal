import styled from "styled-components";
import Link from "next/link";
import SvgIcon from "../../components/Icons/index.js";

const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  text-align: center;
  border-top: 2px solid black;
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
        <SvgIcon variant="homepage" size={35} color="black" />
      </Link>
      <Link href="/favorites">
        <SvgIcon variant="favorite" size={35} color="black" />
      </Link>
      <Copyright>©PfotenPortal</Copyright>
    </StyledFooter>
  );
}
