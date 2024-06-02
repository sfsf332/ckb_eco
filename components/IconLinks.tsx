import React, { useEffect } from "react";

import Link from "next/link";

const IconLinks = (): JSX.Element => {
  return (
    <div  className="nav-links">
    <Link href={"#"}>
      <img src="images/logo_x.png" alt="" />
    </Link>
    <Link href={"#"}>
      <img src="images/logo_doc.png" alt="" />
    </Link>
    <Link href={"#"}>
      <img src="images/logo_tg.png" alt="" />
    </Link>
    <Link href={"#"}>
      <img src="images/logo_dc.png" alt="" />
    </Link>
  </div>
  );
};

export default IconLinks;
