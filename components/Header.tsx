"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import IconLinks from "./IconLinks";
import localFont from "next/font/local";
import isMobile from "is-mobile";
import Drawer from "react-modern-drawer";
import { FiAlignJustify } from "react-icons/fi";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import React from "react";
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

export default function Header() {
  const router = useRouter();
  const is_mobile = isMobile();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header>
        {is_mobile ? (
          <>
            <div className="navMobile">
              <Link href="/">
                <img
                  className="nav_logo"
                  height={30}
                  src="images/logo.png"
                />
              </Link>
              <FiAlignJustify
              color="#000"
                size={32}
                onClick={() => {
                  toggleDrawer();
                }}
              />
            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="drawer"
            >
              <Link href="/build">Build</Link>
             
              <Link href="/eco">Ecosystem</Link>
              <Link href="/community">Community</Link>
              <Link href="/about">About</Link>
              <div className="nav_links"><IconLinks /></div>
            </Drawer>
          </>
        ) : (
          <div className="header-main">
            <Link href="/">
              <img
                className="nav_logo"
                height={30}
                src="images/logo.png"
              />
            </Link>
            <div className={"nav-main " + RanadeFont.className}>
              <Link
                href="/build"
                className={router.pathname === "/build" ? "sel" : ""}
              >
                Build
              </Link>
              <Link
                href="/eco"
                className={router.pathname === "/eco" ? "sel" : ""}
              >
                Ecosystem
              </Link>
              <Link
                href="/community"
                className={router.pathname === "/community" ? "sel" : ""}
              >
                Community
              </Link>
              <Link
                href="/about"
                className={router.pathname === "/about" ? "sel" : ""}
              >
                About
              </Link>
              {/* <span onClick={()=>onToggleLanguageClick('en')}>{changeTo}</span> */}
            </div>
            <IconLinks />
          </div>
        )}
      </header>
    </>
  );
}
