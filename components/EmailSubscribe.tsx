"use client";
import React, { useEffect, useRef } from "react";

import Script from "next/script";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const EmailSubscribe = (): JSX.Element => {
  // const initSubstack = () => {
  //   if ((window as any).CustomSubstackWidget) {
  //     delete (window as any).CustomSubstackWidget;
  //   }
  //   (window as any).CustomSubstackWidget = {
  //     substackUrl: "ckbeco.substack.com",
  //     placeholder: "example@gmail.com",
  //     buttonText: "Subscribe",
  //     theme: "custom",
  //     colors: {
  //       primary: "#6664EA",
  //       input: "#C0C0C0",
  //       email: "#333",
  //       text: "#000",
  //     },
  //   };
  // };
  useEffect(() => {
    if ((window as any).CustomSubstackWidget) {
      delete (window as any).CustomSubstackWidget;
    }
    (window as any).CustomSubstackWidget = {
      substackUrl: "ckbecofund.substack.com",
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
    const script = document.createElement("script");

    // Set the source of the script to the Substack widget script
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="substack">
      
      <div className="contentleft">
        <div>
          <img src="images/logo.png" height={32} />
          <p>
            CKB Ecosystem Fund is dedicated to fostering innovations on CKB.
            <br />
            We invest in early and growth-stage startups that drive the
            adoption, scalability, and accessibility of CKB.
          </p>
        </div>
        <Link href="mailto:contact@ckbeco.fund" target="_blank">
          <MdEmail /> contact@ckbeco.fund
        </Link>
      </div>
      <div className="contentRight">
        <div id="custom-substack-embed">
          {/* <form className="custom-substack-widget csw-theme-custom"><input placeholder="example@gmail.com" value="" /><button type="submit">Subscribe</button></form> */}
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
