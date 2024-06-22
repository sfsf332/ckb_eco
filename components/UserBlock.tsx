"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import isMobile from "is-mobile";

interface user {
  item: {
    name: string;
    avatar: string;
    link?: string;
    title: string;
  };
  index: number;
}

const UserBlock: React.FC<user> = ({ item, index }) => {
  const is_mobile = isMobile();

  return (
    <>
      {is_mobile ? (
        <div className="user-block-m">
          <img src={item.avatar} alt={item.name} />
          <div className="intro">
            {item.link ? (
              <Link href={item.link}>
                <FaXTwitter />
              </Link>
            ):<a></a>}

            <h5>{item.name}</h5>
            <p>{item.title}</p>
          </div>
        </div>
      ) : (
        <div className="user-block">
          <img src={item.avatar} alt={item.name} className="avatar" />
          <h5>
            {item.name}
            {item.link && (
              <Link href={item.link}>
                <FaXTwitter />
              </Link>
            )}
          </h5>
          <p>{item.title}</p>
        </div>
      )}
    </>
  );
};

export default UserBlock;
