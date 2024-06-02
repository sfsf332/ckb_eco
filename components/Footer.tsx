import type { FC } from "react";
import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import EmailSubscribe from "./EmailSubscribe";
import FooterInfo from "./FooterInfo";
import IconLinks from "./IconLinks";

const montserrat = Montserrat({ subsets: ["latin"] });
export const Footer: FC = () => {
  return (
    <footer>
      <EmailSubscribe />
      <FooterInfo />
      <div className="footer-main">
        <p className={montserrat.className}>
          @ 2024 CKB Eco Fun. All rights reserved.
        </p>
        <IconLinks />
      </div>
    </footer>
  );
};
