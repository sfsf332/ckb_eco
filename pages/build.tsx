import Link from "next/link";
import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordionList from "components/AnimatedAccordionList";
import faqList from "../public/json/buildfaq.json";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const DevBox = dynamic(() => import("../components/DevBox"), { ssr: false });
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
        <DevBox />
        <div className="build-block-1 ">
          <h2 className={sharpieFont.className}>
          Empower the Bitcoin Ecosystem with
            <br />
            Common Knowledge Base
          </h2>
          <h4>
           We have the docs, grants, and support for you to get started.
          
          </h4>
          <div className="build-links">
            <Link
              href="https://docs.nervos.org/"
              target="_blank"
              className="button_link button_link_1"
            >
              CKB Docs
            </Link>
            <Link
              href="https://www.rgbppfans.com/"
              target="_blank"
              className="button_link button_link_1"
            >
              RGB++ Fans
            </Link>
            <Link
              href="https://www.fiber.world/"
              target="_blank"
              className="button_link button_link_1"
            >
              Fiber Network
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
        <div className="build-block-2" id="grant">
          <img
            src="images/cloud_about_3.png"
            className="cloud cloud_4"
            height={163}
          />
          <div className="content">
            <h2 className={sharpieFont.className}>CKB Eco Fund Spark Program</h2>
            <p>
            Have an innovative concept for the Web5? 
            <br />Whether you need to write the first lines of code or validate your prototype with seed users,
            <br /> the Spark Program provides rapid, lightweight funding to help you take the critical next step in 1-2 months.
              
             
            </p>
            <div className="build-links">
              <Link
                href="https://talk.nervos.org/t/ckb-eco-fund-spark-program-mini-grant-initiative/8752"
                target="_blank"
                className="button_link button_link_1"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="build-block-3">
          <img
            src="images/cloud_about_6.png"
            className="cloud cloud_6"
            height={155}
          />
          <img src="images/bg_build_2.png" className="hill" height={405} />
          <div className="block-main">
            <h3 className="big">Focus Areas</h3>
            <div className="content-block">
              <h3>User-Centric Applications</h3>
              <p>
              We are looking for applications that solve real user problems and explore new forms of digital interaction, whether that involves building the initial prototype or running structured tests to find your first seed users. 
              </p>
            </div>
            <div className="content-block">
              <h3>Digital Sovereign Infrastructure & Primitives</h3>
              <p>
              We support the development of core protocols, developer tooling, and decentralized primitives that strengthen the entire ecosystem. Your work can become the foundational building block for countless other Web5 applications.
              </p>
              <div className="content-list">
                <h5>
                  We are particularly interested in projects that contribute to:
                </h5>
                <div className="project-list">
                  <span>Apps built on AT Protocol</span>
                  <span>DID Solutions</span>
                  <span>RGB++ Innovations</span>
                  <span>Fiber Network</span>
                  <span>Local-first and P2P</span>
                  <span>DAOs & Online Communities</span>
                  <span>Developer Tools</span>
                  <span>Other innovative projects</span>
                </div>
              </div>
            </div>
            <h3 className="big block-2">Our Transparent Process</h3>
            <div className="process-block">
              <div>
                <h3>A. Apply & Discuss</h3>
                <p>Submit your proposal in our  <Link style={{color: "#000"}} href="https://discord.gg/fSVmtfAxyX" target="_blank">Spark Program </Link>channel. Our committee will engage with your idea immediately.</p>
                <img src="images/arrow.png" height={72} />
              </div>
              <div>
                <h3>B. Review & Public Decision</h3>
                <p>
                Review and decide within one week. The decision and our reasoning behind it are announced publicly, ensuring full transparency.
                </p>
                <img src="images/arrow.png" height={72} />
              </div>
              <div>
                <h3>C. Launch with Initial Funding</h3>
                <p>Once approved, you'll receive 20% grant to get started immediately and have a dedicated channel for collaboration.</p>
                <img src="images/arrow.png" height={72} />
              </div>
              <div>
                <h3>D. Iterate with Open Progress</h3>
                <p>
                Build in the open and draw the remaining 80% of funds flexibly based on your progress. All project updates and fund distributions are tracked on our public 
                <Link style={{color: "#000"}} href="https://www.notion.so/CKB-Eco-Fund-Spark-Program-Dashboard-1f424205dae080faad8de72a438d576f?source=copy_link" target="_blank">Transparency Dashboard</Link>. 
                </p>
                <img src="images/arrow.png" height={72} />
              </div>
            </div>
            <img
              src="images/bg_build_3.png"
              width={"100%"}
              className="bg-hill"
            />
            <h3 className="big">FAQ</h3>
            <div className="build_faq_list">
              <AnimatedAccordionList list={faqList} />
            </div>
          </div>
        </div>
        <div className="build-block-4">
          <div className="content">
            <h2 className={sharpieFont.className}>
            CKB Community Fund DAO Grants
            </h2>
            <p>
            The CKB Community Fund DAO is a community fund initiated by the Nervos community and jointly contributed by the community and the Nervos Foundation.
            </p>
            <p>
            It provides larger-scale funding for ambitious projects, governed directly by the community. If your vision is big, this is your next step.
             
            </p>
           
            <div className="build-links">
              <Link
                href="https://talk.nervos.org/c/ckb-community-fund-dao/65"
                target="_blank"
                className="button_link button_link_1"
              >
                Learn More
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
