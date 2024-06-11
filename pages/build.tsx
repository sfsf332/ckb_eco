import Link from "next/link";

import Header from "../components/Header";
import { Footer } from "../components/Footer";

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

const BuildPage = () => {
  return (
    <>
      <Header />
      <main className={"build-main " + RanadeFont.className}>
        <div className="main-snap build-block-1">
          <h2 className={sharpieFont.className}>
            Empower the Bitcoin Ecosystem with
            <br />
            Contract Kernel of Bitcoin
          </h2>
          <h4>
            Build with CKB, unleash the potential of assets on Bitcoin with
            RGB++, <br />
            and build the autonomous world on DOBs through the Spore protocol.
          </h4>
          <div className="build-links">
            <Link href="#" className="button_link button_link_1">
              CKB Docs
            </Link>
            <Link href="#" className="button_link button_link_1">
              RGB++ SDK
            </Link>
            <Link href="#" className="button_link button_link_1">
              Spore Protocol
            </Link>
          </div>
          <img
            src="images/cloud_about_4.png"
            className="cloud cloud_1"
            height={125}
          />
          <img
            src="images/cloud_about_1.png"
            className="cloud cloud_2"
            height={163}
          />
          <img
            src="images/cloud_about_5.png"
            className="cloud cloud_3"
            height={271}
          />
         
        </div>
        <div className="main-snap build-block-2">
        <img
            src="images/cloud_about_3.png"
            className="cloud cloud_4"
            height={163}
          />
          <div className="content">
            <h2 className={sharpieFont.className}>CKB Eco Fund Grants</h2>
            <p>
              The CKB Eco Fund is committed to fostering a thriving and
              sustainable ecosystem around CKB.
              <br />
              We provide grants and support to projects that contribute to the
              growth and adoption of CKB and related technologies.
            </p>
            <div className="build-links">
              <Link href="#" className="button_link button_link_1">
                Apply Now
              </Link>
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

export default BuildPage;
