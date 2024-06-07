import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import IconLinks from "./IconLinks";
import localFont from "next/font/local";

const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="header-main">
          <Link href="/">
            <img className="nav_logo" height={80} src="images/ckb-eco-fund-black-png.png"  />
          </Link>
          <div className={"nav-main " + RanadeFont.className}>
            <Link
              href="/"
              className={router.pathname === "/build" ? "sel" : ""}
            >
              Build
            </Link>
            <Link
              href="/"
              className={router.pathname === "/eco" ? "sel" : ""}
            >
              Ecosystem
            </Link>
            <Link
              href="/"
              className={router.pathname === "/community" ? "sel" : ""}
            >
              Community
            </Link>
            <Link
              href="/"
              className={router.pathname === "/about" ? "sel" : ""}
            >
              About
            </Link>
            {/* <span onClick={()=>onToggleLanguageClick('en')}>{changeTo}</span> */}
          </div>
          <IconLinks />
        </div>
      </header>
    </>
  );
}
