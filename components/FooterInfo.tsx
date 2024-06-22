import React, { useEffect } from "react";

import Link from "next/link";

const FooterInfo = (): JSX.Element => {
  return (
    <div className="footerinfo">
      <dl>
        <dt>Build</dt>
        <dd>
          <Link href={"https://docs.nervos.org/"}>Docs</Link>
        </dd>
        <dd>
          <Link href={"/build#grant"}>Grants</Link>
        </dd>
        <dd>
          <Link href={"/build"}>Support</Link>
        </dd>
      </dl>
      <dl>
        <dt>Ecosystem</dt>
        <dd>
          <Link href={"/eco"}>Ecosystem Hub</Link>
        </dd>
        <dd>
          <Link href={"https://explorer.nervos.org/"}>Explorer</Link>
        </dd>
        <dd>
          <Link href={"https://forms.gle/CVCgHXaeBZadRxa7A"}>Submit Projects</Link>
        </dd>
      </dl>
      <dl>
        <dt>Community</dt>
        <dd>
          <Link href={"/community#news"}>News</Link>
        </dd>
        <dd>
          <Link href={"/community#event"}>Events</Link>
        </dd>
        <dd>
          <Link href={"/community#hub"}>Community Hub</Link>
        </dd>
      </dl>
      <dl>
        <dt>About</dt>
        <dd>
          <Link href={"/about"}>Intro</Link>
        </dd>
        <dd>
          <Link href={"/about#team"}>Team</Link>
        </dd>
        <dd>
          <Link href={"/about#media"}>Media Kit</Link>
        </dd>
      </dl>
    </div>
  );
};

export default FooterInfo;
