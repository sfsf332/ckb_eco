"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import News from "../public/json/news.json";

const StatusBox = () => {


  
  return (
    <div className="news-list">
    {News.map((news:any, index) => {
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
  );
};

export default StatusBox;
