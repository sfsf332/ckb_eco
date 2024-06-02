import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType, Metadata } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";

import localFont from "next/font/local";
import AnimatedAccordion from "components/AnimatedAccordion";

// Font files can be colocated inside of `app`
const sharpieFont = localFont({
  src: "../public/font/SharpieHand-p4Pa.ttf",
  display: "swap",
});

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="index_main">
        <div className={"main-snap main-index "}>
          <img src="images/ckb.png" className="index_title" />
        </div>
        <div className="main-snap second-screen">
          <h2 className={sharpieFont.className}>
            Bitcoin, Isomorphic. Possibilities, Leaped.
          </h2>
          <p>
            CKB maps Bitcoin through RGB++, empowering users and developers to{" "}
            <br />
            leap into autonomous worlds of boundless possibilities.
          </p>
          <p>
            <Link href="#" className="button_link">
              Docs
            </Link>
            <Link href="#" className="button_link">
              WHY CKB?
            </Link>
          </p>
          <div className="status_box">
            <div className="status_card status_1">
              <h4>415.12 PH/s</h4>
              <p>HASH RATE</p>
            </div>
            <div className="status_card status_2">
              <h4>17.5M+</h4>
              <p>LIVE CELL</p>
            </div>
            <div className="status_img">
              <img src="images/ckb_status.png" />
            </div>
            <div className="status_card status_3">
              <h4>27,380</h4>
              <p>RGB++ TRANSLATIONS</p>
            </div>
            <div className="status_card status_4">
              <h4>3.81M+</h4>
              <p>UNIQUE ADDRESSES</p>
            </div>
          </div>
          <div className="status_cloud">
            <img src="images/cloud_1.png" />
          </div>
          <div className="status_cloud_1">
            <img src="images/cloud_2.png" />
          </div>
        </div>
        <div className="main-snap third-screen">
          <h2 className={sharpieFont.className}>
            The Role of CKB in the Bitcoin Ecosystem
          </h2>
          <div className="img_box">
            <img src="images/img_eco.png" className="img_eco" />
          </div>
          <div className="img_tree">
            <img src="images/tree.png" />
          </div>
        </div>
        <div className="main-snap roadmap-screen">
          <h2 className={sharpieFont.className}>2024 Roadmap</h2>
          <div className="season season_1">
            <div className="label_season">Q1</div>
            <ul>
              <li>BTCKB Strategy</li>
              <li>RGB++ Launch</li>
              <li>Host Bitcoin Singapore</li>
            </ul>
          </div>
          <div className="season season_2">
            <div className="label_season">Q2</div>
            <ul>
              <li>RGB++ Ecosystem Early Stage Onboarding</li>
              <li>Co-host HK Web3 Festival Bitcoin Stage </li>
            </ul>
          </div>
          <div className="season season_3">
            <div className="label_season">Q3</div>
            <ul>
              <li>UTXO Stack Staking</li>
              <li>CKB Lightning Network Testing </li>
              <li>Eco Fund Grants Program Kickoff </li>
              <li>Host CKB US Meetup Tour </li>
            </ul>
            <img className="bg_current" src="images/bg_current.png" />
          </div>
          <div className="season season_4">
            <div className="label_season">Q4</div>
            <ul>
              <li>UTXO Stack Launch</li>
              <li>CKB Lightning Network Launch</li>
              <li>Common Knowledge Con</li>
            </ul>
          </div>
        </div>
        <div className="main-snap partner-screen">
          <h2 className={sharpieFont.className}>Partners</h2>
          <div className="partner_list">
            <Link href={"#"}>
              <img src="images/partner/partners-logo-1-1.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-1-2.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-1-3.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-1-4.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-1-5.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-2-1.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-2-2.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-2-3.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-2-4.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-2-5.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-3-1.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-3-2.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-3-3.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-3-4.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-3-5.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-4-1.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-4-2.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-4-3.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-4-4.png" />
            </Link>
            <Link href={"#"}>
              <img src="images/partner/partners-logo-4-5.png" />
            </Link>
          </div>
        </div>
        <div className="main-snap faq-screen">
          <h2 className={sharpieFont.className}>FAQ</h2>
          <div className="faq_list">
            <AnimatedAccordion
              title={"1. What is CKB?"}
              content={
                "CKB is a highly flexible and interoperable blockchain built on RISC-V and secured by Proof-of-Work. As the foundation of the Nervos network, CKB ensures outstanding security, decentralization, and modularity. By mapping Bitcoin through RGB++, CKB empowers users and developers to explore boundless possibilities in autonomous worlds (AW)."
              }
            />
            <AnimatedAccordion
              title={"2. What makes CKB secure and flexible?"}
              content={
                "The security and flexibility of CKB come from its innovative features: 1. PoW consensus, the same mechanism that secures Bitcoin, with Eaglesong hash function, ensuring robustness and decentralization. 2. Cell model, enabling flexible state storage and scalability. 3. RISC-V powered CKB-VM, supporting versatile smart contracts. 4. Protocol-level account abstraction, enhancing user experiences. These features lay a solid foundation for the decentralized economy and AW."
              }
            />
            <AnimatedAccordion
              title={"3. What is the relationship between CKB and RGB++?"}
              content={
                "RGB++ is a new L1 asset standard that enables the seamless leap of Bitcoin L1 assets to CKB without the need for a cross-chain bridge. CKB's unique architecture empowers RGB++, extending Bitcoin's capabilities with smart contract functionality and scalability."
              }
            />
            <AnimatedAccordion
              title={"4. What is CKB's tokenomics model?"}
              content={
                "CKB's tokenimics is designed to ensure the network's long-term sustainability and security. The native token, CKByte, serves three key functions: paying for computation, transaction fees, and state rent. The model includes two issuance mechanisms: Base Issuance, which subsidizes security early on with a predictable halving schedule, and Secondary Issuance, a small, fixed annual inflation incentivizing miners, compensates Nervos DAO participants and supports ongoing development. By holding CKBytes in Nervos DAO, users can offset the inflationary effects of Secondary Issuance and earn interest while contributing to the network's security and stability."
              }
            />
            <AnimatedAccordion
              title={"5. What types of applications can be built on CKB?"}
              content={
                "CKB's flexibility allows developers to build various decentralized applications, including DeFi protocols, games, social networks, and wallets. Visit the Ecosystem page to explore the growing range of applications on CKB."
              }
            />
            <AnimatedAccordion
              title={"6. What is the vision of the CKB Ecosystem Fund?"}
              content={
                "The CKB Ecosystem Fund is dedicated to fostering innovations on CKB. It aims to invest in startups that drive adoption, scalability, and accessibility of CKB, cultivating a vibrant and sustainable ecosystem."
              }
            />
            <AnimatedAccordion
              title={"7. How can I participate in the CKB ecosystem?"}
              content={
                "There are many ways to get involved: you can mine CKB, build applications on CKB, trade CKB tokens on exchanges, or join the Nervos DAO to earn rewards. Choose your path and become a part of the CKB community."
              }
            />
            <AnimatedAccordion
              title={"8. Where can I buy CKB tokens?"}
              content={
                "CKB is available on more than 30 mainstream exchanges, including Binance, Huobi, Gate.io, KuCoin, and MEXC. Visit CoinMarketCap for a complete list of CKB markets."
              }
            />
          </div>
        </div>
        <div className="main-snap footer-screen">
        <Footer />
        </div>
      </main>
    </>
  );
};

export default Homepage;
