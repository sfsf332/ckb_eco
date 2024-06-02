import Header from "../components/Header";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import reportList from "../public/json/report.json";
import videoList from "../public/json/video.json";
import { Metadata } from "next";
type Props = {
  // Add custom props here
};

const Resources = () => {
  console.log(reportList);
  return (
    <>
      <Header />
      <main className={"main-res " + montserrat.className}>
        <div className="git-list">
          <div className="git-title">
            <img src="images/icon_github.png" /> Github
          </div>
          <div className="git-box">
            <div className="git-item">
              <div className="item-title">
                <Link href="https://github.com/ckb-cell/rgbpp-sdk/">
                  RGB++ SDK
                </Link>
                <span>Public</span>
              </div>
              <div className="item-intro">
                Utilities for Bitcoin and RGB++ asset integration
              </div>
              <div className="item-status">
                <div>
                  <GoDotFill color="rgba(11, 187, 243, 1)" size={18} />
                  TypeScript
                </div>
                <div>
                  <IoStarSharp />
                  41
                </div>
              </div>
            </div>
            <div className="git-item">
              <div className="item-title">
                <Link href="https://github.com/ckb-cell/RGBPlusPlus-design">
                  RGBPlusPlus-design
                </Link>
                <span>Public</span>
              </div>
              <div className="item-intro">
                RGB++ protocol early design documentation
              </div>
              <div className="item-status">
                <div>
                  <GoDotFill color="rgba(137, 224, 81, 1)" size={18} />
                  TypeScript
                </div>
                <div>
                  <IoStarSharp />
                  29
                </div>
              </div>
            </div>
            <div className="git-item">
              <div className="item-title">
                <Link href="https://gist.github.com/Flouse/c5f81492b80734d0cf177568b1866eea">
                  Simple Technical Guide for RGB++ Development
                </Link>
                <span>Public</span>
              </div>
              <div className="item-intro">
                Simple Technical Guide for RGB++ Development
              </div>
              <div className="item-status">
                <div>
                  <IoStarSharp size={14} />
                  29
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="git-list">
          <div className="git-title">
            <img src="images/icon_youtube.png" /> Youtube
          </div>
          <div className="youtube-box">
            {videoList.map((video, index) => {
              return (
                <div className="item-youtube">
                  <Link href={video.link} key={index}>
                    <img src={video.poster} className="youtube_poster" />
                    <h3>

                      {/* <img src="images/youtube_title.png" /> */}
                      <span>{video.title}</span>
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="git-list">
          <div className="git-title">
            <img src="images/icon_report.png" /> Report
          </div>
          <div className="report_list">
            {reportList.map((item, index) => {
              return <Link href={item.link}>{item.title}</Link>;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
