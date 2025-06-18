import type { FC } from "react";

import { Montserrat } from "next/font/google";
import FooterInfo from "./FooterInfo";
import IconLinks from "./IconLinks";
import localFont from "next/font/local";
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});
import dynamic from "next/dynamic";

const EmailSubscribe = dynamic(() => import("../components/EmailSubscribe"), { ssr: false });
const montserrat = Montserrat({ subsets: ["latin"] });
export const Footer: FC = () => {
  return (
    <footer className={RanadeFont.className}>
      <EmailSubscribe />
      <FooterInfo />
      <div className="footer-main">
        <p className={montserrat.className}>
          @ 2024 - {new Date().getFullYear()} CKB Eco Fund. All rights reserved.
        </p>
        <IconLinks />
      </div>
    </footer>
  );
};
