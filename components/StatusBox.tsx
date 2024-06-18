"use client";
import React, { useState } from "react";
import isMobile from "is-mobile";

const StatusBox = () => {
  const is_mobile = isMobile();

  return (
    <>
      {" "}
      {is_mobile ? (
        <div className="status_box_m">
          <div className="status_img">
            <img src="images/ckb_status_m.png" />
          </div>
          <div className="status_card ">
            <h4>415.12 PH/s</h4>
            <p>HASH RATE</p>
          </div>
          
          <div className="status_card ">
            <h4>27,380</h4>
            <p>RGB++ TRANSLATIONS</p>
          </div>
          <div className="status_card ">
            <h4>17.5M+</h4>
            <p>LIVE CELL</p>
          </div>

          <div className="status_card ">
            <h4>3.81M+</h4>
            <p>UNIQUE ADDRESSES</p>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default StatusBox;
