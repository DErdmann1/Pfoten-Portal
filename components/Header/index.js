import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/images/logo1.png" alt="Logo" width={200} height={100} />
      </Link>
    </header>
  );
};

export default Header;
