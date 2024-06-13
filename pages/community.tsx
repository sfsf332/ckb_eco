import Link from "next/link";

import Header from "../components/Header";
import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordion from "components/AnimatedAccordion";
import React, { useEffect } from "react";
import NewsList from "../public/json/news.json";
import Events from "../public/json/event.json";
import { FaTwitter, FaGlobe } from "react-icons/fa";

const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

const Community = () => {
  const [showNews, setShowNews] = React.useState(NewsList);
  const [showEvents, setShowEvents] = React.useState(Events);

 
 
  return (
    <>
      <Header />
      <main className={"comm-main " + RanadeFont.className}>
        <div className="comm-block-1">
          <h2 className={sharpieFont.className}>
          One Community,<br />
          Infinite Possibilities
          </h2>
          <h4>
          Stay up-to-date with the latest news, participate in events, and connect with fellow CKB enthusiasts through our community.
          </h4>
         
        </div>
        <div className="comm-block-2">
          <div className="comm-title">
            <h2 className={sharpieFont.className}>News</h2>
            <Link className="link_more" href={'#'}>View all news</Link>
          </div>
        <div className="news-list">
            <div className="news-item">
                
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

export default Community;
