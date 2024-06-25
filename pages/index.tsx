import Link from "next/link";
import { Footer } from "../components/Footer";
import faqList from "../public/json/faq.json";
import localFont from "next/font/local";
import AnimatedAccordionList from "components/AnimatedAccordionList";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), { ssr: false });
const StatusBox = dynamic(() => import('../components/StatusBox'), { ssr: false });

// Font files can be colocated inside of `app`
const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

const Homepage = () => {
  // console.log(1111111111)
  // const staticData = await fetchData();
  
  return (
    <>
      <Header />
      <main className={"index_main "+RanadeFont.className}>
        <div className={"main-snap main-index "}>
          <img src="images/ckb_1.png" className="index_title" />
          <div className="index_sub_title"></div>
        </div>
        <div className="main-snap second-screen">
          <h2 className={sharpieFont.className}>
            Bitcoin, Isomorphic. Possibilities, Leaped.
          </h2>
          <h4>
            CKB maps Bitcoin through RGB++, empowering users and developers to{" "}
            <br />
            leap into autonomous worlds of boundless possibilities.
          </h4>
          <div>
            <Link href="https://docs.nervos.org/" target="_blank" className="button_link">
              Docs
            </Link>
            <Link href="https://ckbecofund.substack.com/p/ckb-is-an-ideal-bitcoin-layer-2" target="_blank" className="button_link">
              WHY CKB?
            </Link>
          </div>
          <StatusBox />
          
         
        </div>
        <div className="main-snap third-screen">
          <h2 className={sharpieFont.className}>
            The Role of CKB <br /> in the Bitcoin Ecosystem
          </h2>
          <Link className="img_box" href='images/img_eco.png' target="_blank"></Link>
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
              <li>Co-host HK Web3 Festival Bitcoin Stage</li>
              <li>Speak at Bitcoin Asia and Bitcoin Seoul</li>
            </ul>
          </div>
          <div className="season season_3">
            <div className="label_season">Q3</div>
            <ul>
              <li>UTXO Stack Staking</li>
              <li>CKB Lightning Network Testing </li>
              <li>Eco Fund Grants Program Kickoff </li>
            </ul>
            <img className="bg_current" src="images/bg_current.png" />
          </div>
          <div className="season season_4">
            <div className="label_season">Q4</div>
            <ul>
              <li>UTXO Stack Launch</li>
              <li>CKB Lightning Network Launch</li>
              <li>Host Common Knowledge Con</li>
            </ul>
          </div>
        </div>
        <div className="main-snap partner-screen">
          <h2 className={sharpieFont.className}>Partners</h2>
          <div className="partner_list">
            <Link href={"https://www.cmbchina.com/"} target="_blank">
              <img src="images/partner/partners-logo-1-1.png" />
            </Link>
            <Link href={"https://www.hongshan.com/"} target="_blank">
              <img src="images/partner/partners-logo-1-2.png" />
            </Link>
            <Link href={"https://www.matrixpartners.com.cn/"} target="_blank">
              <img src="images/partner/partners-logo-1-3.png" />
            </Link>
            <Link href={"https://hashkey.capital/"} target="_blank">
              <img src="images/partner/partners-logo-1-5.png" />
            </Link>
            {/* <Link href={"https://www.ceyuan.com/"} target="_blank">
              <img src="images/partner/partners-logo-1-4.png" />
            </Link> */}
            <Link href={"https://dragonfly.xyz/"} target="_blank">
              <img src="images/partner/DragonflyCapital.png" />
            </Link>
            <Link href={"https://polychain.capital/"} target="_blank">
              <img src="images/partner/partners-logo-2-1.png" />
            </Link>
            <Link href={"https://www.blockchaincapital.com/"} target="_blank">
              <img src="images/partner/partners-logo-2-3.png" />
            </Link>
            <Link href={"https://multicoin.capital/"} target="_blank">
              <img src="images/partner/partners-logo-2-2.png" />
            </Link>
            <Link href={"https://www.bitmain.com/"} target="_blank">
              <img src="images/partner/partners-logo-2-4.png" />
            </Link>
            <Link href={"https://www.okx.com/zh-hans/ventures"} target="_blank">
              <img src="images/partner/partners-logo-2-5.png" />
            </Link>
            <Link href={"https://snzholding.com/"} target="_blank">
              <img src="images/partner/partners-logo-3-1.png" />
            </Link>
            <Link href={"https://www.utxo.management/"} target="_blank">
              <img src="images/partner/partners-logo-3-2.png" />
            </Link>
            <Link href={"https://www.abcde.com/"} target="_blank">
              <img src="images/partner/partners-logo-3-3.png" />
            </Link>
            <Link href={"https://waterdrip.io/"} target="_blank">
              <img src="images/partner/partners-logo-3-4.png" />
            </Link>
            <Link href={"https://1kx.network/"} target="_blank">
              <img src="images/partner/partners-logo-3-5.png" />
            </Link>
            <Link href={"https://token.im/"} target="_blank">
              <img src="images/partner/partners-logo-4-1.png" />
            </Link>
            <Link href={"https://www.1confirmation.com/"} target="_blank">
              <img src="images/partner/partners-logo-4-2.png" />
            </Link>
            <Link href={"https://www.matrixport.com/"} target="_blank">
              <img src="images/partner/partners-logo-4-3.png" />
            </Link>
            <Link href={"https://y2z.io/"} target="_blank">
              <img src="images/partner/partners-logo-4-4.png" />
            </Link>
            <Link href={"https://drklab.net/"} target="_blank">
              <img src="images/partner/partners-logo-4-5.png" />
            </Link>
          </div>
        </div>
        <div className="main-snap faq-screen">
          <h2 className={sharpieFont.className}>FAQ</h2>
          <div className="faq_list">
            <AnimatedAccordionList list={faqList} />
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
