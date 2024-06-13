import Link from "next/link";

import Header from "../components/Header";
import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordion from "components/AnimatedAccordion";
import React, { useEffect } from "react";
import ReportList from "../public/json/report.json";
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
  const [showNews, setShowNews] = React.useState(ReportList);
  const [showEvents, setShowEvents] = React.useState(Events);
  return (
    <>
      <Header />
      <main className={"comm-main " + RanadeFont.className}>
        <div className="comm-block-1">
          <h2 className={sharpieFont.className}>
            One Community,
            <br />
            Infinite Possibilities
          </h2>
          <h4>
            Stay up-to-date with the latest news, participate in events, and
            connect with fellow CKB enthusiasts through our community.
          </h4>
        </div>
        <div className="comm-block-2">
          <div className="block-main">
            <div className="comm-title">
              <h2 className={sharpieFont.className}>News</h2>
              <Link className="link_more" href={"#"}>
                View all news
              </Link>
            </div>
            <div className="news-list">
              {showNews.map((news, index) => {
                return (
                  <div className="news-item" key={index}>
                    <div className="news-head">
                      <img src={news.head} />
                    </div>
                    <div className="news-content">
                      <div className="news-time">
                        <span>{news.time}</span>
                        <span className="tag">{news.tag}</span>
                      </div>
                      <p>{news.title} </p>
                      <div className="more">
                        <Link href={news.link} target="_blank">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="comm-block-2">
          <div className="block-main">
            <div className="comm-title">
              <h2 className={sharpieFont.className}>News</h2>
              <Link className="link_more" href={"#"}>
                View all news
              </Link>
            </div>
            <div className="news-list">
              {showNews.map((news, index) => {
                return (
                  <div className="news-item" key={index}>
                    <div className="news-head">
                      <img src={news.head} />
                    </div>
                    <div className="news-content">
                      <div className="news-time">
                        <span>{news.time}</span>
                        <span className="tag">{news.tag}</span>
                      </div>
                      <p>{news.title} </p>
                      <div className="more">
                        <Link href={news.link} target="_blank">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
