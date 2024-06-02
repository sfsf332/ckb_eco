import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType, Metadata } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../components/Header";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import { isMapIterator } from "util/types";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import EcoList from "../public/json/eco.json";

type Props = {
  // Add custom props here
};

const Eco = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [showType, setShowType] = React.useState("all");
  const [showList, setShowList] = React.useState(EcoList);

  const toggleShow = (type: string) => {
    setShowType(type);
  };
  useEffect(() => {
    let list = EcoList;
    if (showType !== "all") {
      list = EcoList.filter((item) => {
        return item.type.toLocaleLowerCase() === showType;
      });
    }
    setShowList(list);
  }, [showType]);
  return (
    <>
      <Header />
      <main className={"main-eco "+montserrat.className}>
        <div className="eco-box">
          <div className="tabs-title">
            <span
              onClick={() => {
                toggleShow("all");
              }}
              className={showType === "all" ? "sel" : ""}
            >
              All
            </span>
            <span
              onClick={() => {
                toggleShow("wallet");
              }}
              className={showType === "wallet" ? "sel" : ""}
            >
              Wallet
            </span>
            <span
              onClick={() => {
                toggleShow("dex");
              }}
              className={showType === "dex" ? "sel" : ""}
            >
              DEX
            </span>
            <span
              onClick={() => {
                toggleShow("dobs");
              }}
              className={showType === "dobs" ? "sel" : ""}
            >
              DOB
            </span>
            <span
              onClick={() => {
                toggleShow("aw");
              }}
              className={showType === "aw" ? "sel" : ""}
            >
              AW
            </span>
            <span
              onClick={() => {
                toggleShow("did");
              }}
              className={showType === "did" ? "sel" : ""}
            >
              DID
            </span>
          </div>
          <div className="eco-list">
            {showList.map((item, index) => {
              return (
                <div key={index} className="eco-item">
                  <img src={item.img} className="eco-img" />
                  <div className="eco-intro">
                    <h2>
                      <img src={item.ico} className="eco-icon" /> {item.name}
                    </h2>
                    <p>{item.desc}</p>
                    <div className="tags">
                      <div>
                        {item.tag.map((tag, tIndex) => {
                          return <span key={tIndex}>{tag}</span>;
                        })}
                      </div>
                      <Link href={item.link}></Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "second-page",
      "footer",
    ])),
  },
});

export default Eco;
