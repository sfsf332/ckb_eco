import React, { useEffect } from "react";

import Script from "next/script";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const EmailSubscribe = (): JSX.Element => {
  useEffect(() => {
    if ((window as any).CustomSubstackWidget) {
      return;
    }
    (window as any).CustomSubstackWidget = {
      substackUrl: "ckbeco.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#6664EA",
        input: "#C0C0C0",
        email: "#333",
        text: "#000",
      },
    };
  }, []);

  return (
    <div className="substack">
      <Script src="https://substackapi.com/widget.js" async></Script>

      <div className="contentleft">
        <div>
         <img src="images/logo.png" height={32} />
          <p>
            CKB Ecosystem Fund is dedicated to fostering innovations on CKB.<br />
            We invest in early and growth-stage startups that drive the adoption,
            scalability, and accessibility of CKB.
          </p>
        </div>
        <Link href="https://eipfun.substack.com" target="_blank">
          <MdEmail /> contact@ckbeco.fund
        </Link>
      </div>
      <div className="contentRight">
        <div id="custom-substack-embed"></div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
