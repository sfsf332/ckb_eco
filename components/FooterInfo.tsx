import React, { useEffect } from "react";

import Link from "next/link";

const FooterInfo = (): JSX.Element => {
  return (
    <div className="footerinfo">
      <dl>
        <dt>Build</dt>
        <dd>
          <Link href={"#"}>Doc</Link>
        </dd>
        <dd>
          <Link href={"#"}>Grants</Link>
        </dd>
        <dd>
          <Link href={"#"}>Support</Link>
        </dd>
      </dl>
      <dl>
        <dt>Ecosystem</dt>
        <dd>
          <Link href={"#"}>Ecosystem Hub</Link>
        </dd>
        <dd>
          <Link href={"#"}>Explorer</Link>
        </dd>
        <dd>
          <Link href={"#"}>Submit Project</Link>
        </dd>
      </dl>
      <dl>
        <dt>Community</dt>
        <dd>
          <Link href={"#"}>News</Link>
        </dd>
        <dd>
          <Link href={"#"}>Events</Link>
        </dd>
        <dd>
          <Link href={"#"}>Community Hub</Link>
        </dd>
      </dl>
      <dl>
        <dt>About</dt>
        <dd>
          <Link href={"#"}>Intro</Link>
        </dd>
        <dd>
          <Link href={"#"}>Team</Link>
        </dd>
        <dd>
          <Link href={"#"}>Media Kit</Link>
        </dd>
      </dl>
    </div>
  );
};

export default FooterInfo;
