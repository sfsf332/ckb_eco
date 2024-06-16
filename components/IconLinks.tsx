import React, { useEffect } from "react";

import Link from "next/link";
import { FaXTwitter,FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import { SiSubstack } from "react-icons/si";

const IconLinks = (): JSX.Element => {
  return (
    <div  className="nav-links">
    <Link href={"https://twitter.com/CKBEcoFund"}>
      <FaXTwitter />
    </Link>
    <Link href={"#"}>
      <SiSubstack />
    </Link>
    <Link href={"#"}>
      <FaTelegramPlane />
    </Link>
    <Link href={"https://discord.com/invite/FKh8Zzvwqa "}>
      <FaDiscord />
    </Link>
  </div>
  );
};

export default IconLinks;
