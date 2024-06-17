import Link from "next/link";
import { FaXTwitter,FaDiscord } from "react-icons/fa6";

import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { FaTwitter, FaGlobe,FaLink } from "react-icons/fa";

import localFont from "next/font/local";

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
    link: "https://twitter.com/poshboytl",
    title: "Founding Partner",
  },
  {
    name: "Baiyu",
    avatar: "images/head/Baiyu.png",
    link: "https://twitter.com/baiyu2140",
    title: "Partner",
  },
  {
    name: "Jane",
    avatar: "images/head/Jane.png",
    link: "https://twitter.com/janewuco ",
    title: "Partner",
  },
];
const EcoList = [
  {
    name: "Benjen",
    avatar: "images/head/Benjen.png",
    // link: "https://x.con/jane",
    title: "Ecosystem Lead",
  },
  {
    name: "Hongzhou",
    avatar: "images/head/Hongzhou.png",
    link: "https://twitter.com/c_hongzhou",
    title: "Research Lead",
  },
  {
    name: "Dawns",
    avatar: "images/head/Dawns.png",
    link: "https://x.com/DawnsXu",
    title: "BD Lead",
  },
  {
    name: "Mike",
    avatar: "images/head/Mike.png",
    link: "https://twitter.com/mikemu_eth",
    title: "Korea Ambassador",
  },
  
];
const MarketList = [
  {
    name: "Grace",
    avatar: "images/head/Grace.png",
    link: "https://twitter.com/gracegui43 ",
    title: "Events Lead",
  },

  {
    name: "Kelly",
    avatar: "images/head/Kelly.png",
    link: "https://twitter.com/HelloKellyup",
    title: "PR Manager",
  },
  {
    name: "Jacky",
    avatar: "images/head/Jacky.png",
    link: "https://twitter.com/JackyLHH",
    title: "Content Manager",
  },
  {
    name: "Yifan",
    avatar: "images/head/Yifan.png",
    link: "https://twitter.com/yllcode",
    title: "Community Manager",
    type: "marketing",
  },
];
const DevList = [
  {
    name: "Hanssen",
    avatar: "images/head/Hanssen.png",
    link: "https://twitter.com/Hanssen0",
    title: "DevRel Lead",
  },
  {
    name: "Saku",
    avatar: "images/head/Saku.png",
    link: "https://twitter.com/woquinocoin",
    title: "DevRel",
  },
  {
    name: "Francis",
    avatar: "images/head/Francis.png",
    link: "https://x.com/francis_404?s=21&t=X2bHMwcZiaGxpuGxiQM3DQ",
    title: "DevRel",
  },
  {
    name: "Lucas",
    avatar: "images/head/Lucas.png",
    link: "https://twitter.com/Crymongogo",
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
            <img src="images/bird.png" className="bird" width={240} />
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
                <img src="images/logo_nervos.png" width={150} />
                <p>
                  <Link href={"https://www.nervos.org/foundation"} target="_blank">
                  <FaGlobe />
                  </Link>
                  <Link href={"#"}>
                    <FaTwitter />
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
                <img src="images/logo_nervape.png" width={150}  />
                <p>
                  <Link href={"#"}>
                  <FaGlobe />
                  </Link>
                  <Link href={"#"}>
                  <FaTwitter />
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
                <img src="images/logo_cell.png"  width={150} />
                <p>
                  <Link href={"#"}>
                    <FaGlobe />
                  </Link>
                  <Link href={"#"}>
                   <FaTwitter />
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
        <div className={"about-block-3"}  id="team">
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
                        <FaXTwitter />
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
                      {item.link&&<Link href={item.link}>
                      <FaXTwitter />
                      </Link>
                      }
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
                      <FaXTwitter />
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
                      <FaXTwitter />
                      </Link>
                    </h5>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </dd>
          </dl>
          <div className="mask-fit">
            <div className="fit-main">
            <img src="images/star_4.png" className="bg-fit star_4" width={93} />
            <img src="images/star_6.png" className="bg-fit star_3" width={108}  />
            <img src="images/star_3.png" className="bg-fit star_5" width={40}  />
            <img src="images/bg_current.png" className="bg-fit bird_1" />
            <img src="images/rabbit.png" className="bg-fit rabbit" />
            <img src="images/rabbit_1.png" className="bg-fit rabbit_1" />
            <img src="images/rabbit_2.png" className="bg-fit rabbit_2" width={133} />
            <img src="images/star.png" className="bg-fit star_1" />
            <img src="images/star.png" className="bg-fit star_2" />
            <img src="images/star.png" className="bg-fit star_6" />
            <img src="images/star_7.png" className="bg-fit star_7" />
            </div>
          </div>
        </div>
        <div className={'about-block-4'} id="media">
          <h2  className={sharpieFont.className}>Media Kit</h2>
          <div className="media-block">
            <div className="logos">
              <h3>Logo</h3>
              <ul>
              <li><img src="images/logo/ckb-logo-black.png" /></li>
              <li><img src="images/logo/ckb-logo-white.png" /></li>
                <li><img src="images/logo/ckb-eco-logo-black.png" /></li>
                <li><img src="images/logo/ckb-eco-logo-white.png" /></li>
               
              </ul>
              <Link className="download" href={'images/logo/Logo-CKB & CKB Eco Fund.zip'}>
              Download Logo Pack
              </Link>
            </div>
            <div className="colors">
              <h3>Color</h3>
              <div className="color-list">
                
                  <p className="color-black">HEX: #000000 <br />RGB: 0, 0, 0 <br />CMYK: 20, 20, 20, 100</p>
                  <p className="color-white">HEX: #FFFFFF <br />RGB: 255, 255, 255 <br />CMYK: 0, 0, 0, 0</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="footer-screen">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
