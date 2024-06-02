import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import IconLinks from "./IconLinks";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="header-main">
          <Link href="/">
            <img className="nav_logo" height={30} src="images/logo.png"  />
          </Link>
          <div className={"nav-main " + montserrat.className}>
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
