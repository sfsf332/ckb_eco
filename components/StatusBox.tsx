"use client";
import React, { useEffect, useState } from "react";
import isMobile from "is-mobile";

const StatusBox = () => {
  const [hashRate, setHashRate] = useState("393.21");
  const [translations, setTranslations] = useState("24449");
  const [liveCell, setLiveCell] = useState("1.61");
  const [addressCount, setAddressCount] = useState("3.96");

  const is_mobile = isMobile();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://mainnet-api.explorer.nervos.org/api/v1/statistics",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      let data = await res.json();

      setHashRate((data.data.attributes.hash_rate / 1000000000000).toFixed(2));
      setTranslations(data.data.attributes.transactions_last_24hrs);
    };
    const fetchCellData = async () => {
      const res = await fetch(
        "https://mainnet-api.explorer.nervos.org/api/v1/daily_statistics/live_cells_count-dead_cells_count",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      let data = await res.json();
      let cellData = data.data;
      setLiveCell(
        (
          cellData[cellData.length - 1].attributes.live_cells_count / 1000000
        ).toFixed(2)
      );
    };
    const fetchAddressData = async () => {
      const res = await fetch(
        "https://mainnet-api.explorer.nervos.org/api/v1/daily_statistics/addresses_count",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      let data = await res.json();
      let addressData = data.data;
      setAddressCount(
        (
          addressData[addressData.length - 1].attributes.addresses_count /
          1000000
        ).toFixed(2)
      );
    };
    fetchData();
    fetchCellData();
    fetchAddressData();
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

          <div className="status_card ">
            <h4>{translations}</h4>
            <p>RGB++ TRANSACTIONS</p>
          </div>
          <div className="status_card ">
            <h4>{liveCell}M+</h4>
            <p>LIVE CELL</p>
          </div>

          <div className="status_card ">
            <h4>{addressCount}M+</h4>
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
            <h4>{liveCell}M+</h4>
            <p>LIVE CELL</p>
          </div>
          <div className="status_img">
            <img src="images/ckb_status_1.png" />
            <h4>PoW Secures, RGB++ Empowers, Cell Records, Eco Boosts</h4>
          </div>
          <div className="status_card status_3">
            <h4>{translations}</h4>
            <p>RGB++ TRANSACTIONS</p>
          </div>
          <div className="status_card status_4">
            <h4>{addressCount}M+</h4>
            <p>UNIQUE ADDRESSES</p>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusBox;
