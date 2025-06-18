import React, { useEffect } from "react";

import Link from "next/link";
import { FaXTwitter,FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import { SiSubstack } from "react-icons/si";

const IconLinks = (): JSX.Element => {
  return (
    <div  className="nav-links">
    <Link href={"https://twitter.com/CKBEcoFund"} target="_blank">
      <FaXTwitter />
    </Link>
    {/* <Link href={"https://substack.com/@ckbecofund"} target="_blank">
      <SiSubstack />
    </Link>
    <Link href={"https://t.me/ckb_community"} target="_blank">
      <FaTelegramPlane />
    </Link> 
    <Link href={"https://discord.com/invite/FKh8Zzvwqa"}  target="_blank">
      <FaDiscord />
    </Link>*/}
  </div>
  );
};

export default IconLinks;
