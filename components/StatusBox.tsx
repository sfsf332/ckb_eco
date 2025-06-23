"use client";
import React, { useEffect, useState } from "react";
import isMobile from "is-mobile";

const StatusBox = () => {
  const [hashRate, setHashRate] = useState("246.06");
  const [translations, setTranslations] = useState("23828");
  const [liveCell, setLiveCell] = useState("1.52");
  const [addressCount, setAddressCount] = useState("6.26");
  const [occupied, setOccupied] = useState("159.83");
  const is_mobile = isMobile();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/statistics");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        
        setHashRate(data.hashRate);
        setTranslations(data.translations);
        setLiveCell(data.liveCell);
        setAddressCount(data.addressCount);
        setOccupied(data.occupied);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchData();
    // 每5分钟更新一次数据
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {" "}
      {is_mobile ? (
        <div className="status_box_m">
          <div className="status_img">
            <img src="images/ckb_status_m_1.png" />
            <h4>
              PoW Secures, RGB++ Empowers
              <br /> Cell Records, Eco Boosts
            </h4>
          </div>
          <div className="status_card ">
            <h4>{hashRate} PH/s</h4>
            <p>HASH RATE</p>
          </div>

          {/* <div className="status_card ">
            <h4>{translations}</h4>
            <p>RGB++ TRANSACTIONS</p>
          </div> */}
          <div className="status_card ">
            <h4>{occupied} M+</h4>
            <p>CKB OCCUPIED</p>
          </div>
          <div className="status_card ">
            <h4>{liveCell} M+</h4>
            <p>LIVE CELL</p>
          </div>

          <div className="status_card ">
            <h4>{addressCount} M+</h4>
            <p>UNIQUE ADDRESSES</p>
          </div>
        </div>
      ) : (
        <div className="status_box">
          <div className="status_card status_1">
            <h4>{hashRate} PH/s</h4>
            <p>HASH RATE</p>
          </div>
          <div className="status_card status_2">
            <h4>{liveCell} M+</h4>
            <p>LIVE CELL</p>
          </div>
          <div className="status_img">
            <img src="images/ckb_status_1.png" />
            <h4>PoW Secures, RGB++ Empowers, Cell Records, Eco Boosts</h4>
          </div>
          {/* <div className="status_card ">
            <h4>{translations}</h4>
            <p>RGB++ TRANSACTIONS</p>
          </div> */}
          <div className="status_card ">
            <h4>{occupied} M+</h4>
            <p>CKB OCCUPIED</p>
          </div>
          <div className="status_card status_4">
            <h4>{addressCount} M+</h4>
            <p>UNIQUE ADDRESSES</p>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusBox;
