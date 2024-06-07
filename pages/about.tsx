import Link from "next/link";

import Header from "../components/Header";
import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordion from "components/AnimatedAccordion";

// Font files can be colocated inside of `app`
const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});
const PartnerList = [
  {
    name: "Terry",
    avatar: "images/head/Terry.png",
    link: "https://x.con/cipher",
    title: "Founding Partner",
  },
  {
    name: "Baiyu",
    avatar: "images/head/Baiyu.png",
    link: "https://x.con/baiyu",
    title: "Partner",
  },
  {
    name: "Jane",
    avatar: "images/head/Jane.png",
    link: "https://x.con/jane",
    title: "Partner",
  },
];
const EcoList = [
  {
    name: "Benjen",
    avatar: "images/head/Benjen.png",
    link: "https://x.con/jane",
    title: "Ecosystem Lead",
  },
  {
    name: "Hongzhou",
    avatar: "images/head/Hongzhou.png",
    link: "https://x.con/Hongzhou",
    title: "Research Lead",
  },
  {
    name: "Mike",
    avatar: "images/head/Mike.png",
    link: "https://x.con/Mike",
    title: "Korea Ambassador",
  },
];
const MarketList = [
  {
    name: "Grace",
    avatar: "images/head/Grace.png",
    link: "https://x.con/Mike",
    title: "Events Lead",
  },

  {
    name: "Kelly",
    avatar: "images/head/Kelly.png",
    link: "https://x.con/Mike",
    title: "PR Manager",
  },
  {
    name: "Jacky",
    avatar: "images/head/Jacky.png",
    link: "https://x.con/Mike",
    title: "Content Manager",
  },
  {
    name: "Yifan",
    avatar: "images/head/Yifan.png",
    link: "https://x.con/Yifan",
    title: "Community Manager",
    type: "marketing",
  },
];
const DevList = [
  {
    name: "Hanssen",
    avatar: "images/head/Hanssen.png",
    link: "https://x.con/Yifan",
    title: "DevRel Lead",
  },
  {
    name: "Saku",
    avatar: "images/head/Saku.png",
    link: "https://x.con/Saku",
    title: "DevRel",
  },
  {
    name: "Francis",
    avatar: "images/head/Francis.png",
    link: "https://x.con/Yifan",
    title: "DevRel",
  },
  {
    name: "Lucas",
    avatar: "images/head/Lucas.png",
    link: "https://x.con/Yifan",
    title: "DevRel",
  },
];
const AboutPage = () => {
  return (
    <>
      <Header />
      <main className={"about-main " + RanadeFont.className}>
        <div className={"about-block-1"}>
          <img src="images/star_1.png" className="planet_1" />
          <img src="images/star_5.png" className="planet_2" />
          <div className="title_img">
            <img src="images/ckb_pink.png" className="title" />
            <img src="images/bird.png" className="bird" />
          </div>
          <h6>
            CKB Ecosystem Fund is dedicated to fostering innovations on CKB. We
            invest in early and growth-stage startups that drive the adoption,
            scalability, and accessibility of CKB. Our mission is to support
            promising projects and teams by providing funding, resources, and
            strategic guidance to help them achieve rapid growth and
            breakthroughs. The CKB Ecosystem Fund aims to build a robust and
            sustainable blockchain ecosystem, continuously exploring and
            supporting cutting-edge technologies and applications that enhance
            the value of the CKB network.
          </h6>
        </div>
        <div className={"about-block-2"}>
          <img src="images/img_bird.png" className="bird" />
          <img src="images/cloud_3.png" className="cloud_1" />
          <img src="images/cloud_4.png" className="cloud_2" />
          <img src="images/star.png" className="star_1" />
          <img src="images/star.png" className="star_2" />
          <img src="images/star.png" className="star_3" />
          <div className="block-main">
            <h3>Other Key Players of CKB Ecosystem</h3>
            <div className="intro-list">
              <div className="intro-item">
                <img src="images/logo_nervos.png" />
                <p>
                  <Link href={"#"}>
                    <img src="images/icon_website.png" />
                  </Link>
                  <Link href={"#"}>
                    <img src="images/logo_x.png" />
                  </Link>
                </p>
                <h6>
                  The Nervos Foundation is a non-profit organization whose
                  mission is to support the long-term growth of the Nervos
                  Network. We work to ensure the future success of the network
                  by seeding the community to grow independently while driving
                  meaningful innovation in the industry.
                </h6>
              </div>
              <div className="intro-item">
                <img src="images/logo_nervape.png" />
                <p>
                  <Link href={"#"}>
                    <img src="images/icon_website.png" />
                  </Link>
                  <Link href={"#"}>
                    <img src="images/logo_x.png" />
                  </Link>
                </p>
                <h6>
                  Cryptape is a veteran in blockchain infrastructure research
                  and engineering that is contributing to CKB core development,
                  protocol design, engineering and blockchain research. By
                  committing to the "open source everything" model, Cryptape
                  continues to design and build trustworthy protocols and
                  products serving millions of users, covering all aspects of
                  the blockchain ecosystem and servicing the digital world of
                  tomorrow.
                </h6>
              </div>
              <div className="intro-item">
                <img src="images/logo_cell.png" />
                <p>
                  <Link href={"#"}>
                    <img src="images/icon_website.png" />
                  </Link>
                  <Link href={"#"}>
                    <img src="images/logo_x.png" />
                  </Link>
                </p>
                <h6>
                  CELL Studio is a blockchain software development company
                  dedicated to the BTC and CKB ecosystem, committed to advancing
                  Nervos BTCKB initiative. Its goal is to facilitate the
                  integration of BTC and CKB, empowering CKB to emerge as the
                  premier Bitcoin Layer2 solution fully interoperable with BTC,
                  utilizing a "PoW+UTXO" framework. The key products include
                  JoyID Wallet, RGB++ Protocol, and UTXO Stack etc.{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className={"about-block-3"}>
        
          <dl>
            <dt>
              <h2 className={sharpieFont.className}>Partners</h2>
            </dt>
            <dd>
              {PartnerList.map((item, index) => {
                return (
                  <div className="user-block" key={index}>
                    <img src={item.avatar} alt={item.name} className="avatar" />
                    <h5>
                      {item.name}
                      <Link href={item.link}>
                        <img src={"images/logo_x.png"} />
                      </Link>
                    </h5>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </dd>
          </dl>
          <dl>
            <dt>
              <h2 className={sharpieFont.className}>Ecosystem</h2>
            </dt>
            <dd>
              {EcoList.map((item, index) => {
                return (
                  <div className="user-block" key={index}>
                    <img src={item.avatar} alt={item.name} className="avatar" />
                    <h5>
                      {item.name}
                      <Link href={item.link}>
                        <img src={"images/logo_x.png"} />
                      </Link>
                    </h5>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </dd>
          </dl>
          <dl>
            <dt >
              <h2 className={sharpieFont.className}>Marketing</h2>
            </dt>
            <dd>
              {MarketList.map((item, index) => {
                return (
                  <div className="user-block" key={index}>
                    <img src={item.avatar} alt={item.name} className="avatar" />
                    <h5>
                      {item.name}
                      <Link href={item.link}>
                        <img src={"images/logo_x.png"} />
                      </Link>
                    </h5>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </dd>
          </dl>
          <dl>
            <dt>
              <h2 className={sharpieFont.className}>
                Developer <br />
                Relations
              </h2>
            </dt>
            <dd>
              {DevList.map((item, index) => {
                return (
                  <div className="user-block" key={index}>
                    <img src={item.avatar} alt={item.name} className="avatar" />
                    <h5>
                      {item.name}
                      <Link href={item.link}>
                        <img src={"images/logo_x.png"} />
                      </Link>
                    </h5>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </dd>
          </dl>
        </div>
        <div className="footer-screen">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
