import Header from "../components/Header";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import Link from "next/link";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import contributorsList from "../public/json/contributors.json";

type Props = {
  // Add custom props here
};

const Contributors = () => {
  return (
    <>
      <Header />
      <main className={"main-contributors " + montserrat.className}>
        <div className="cont-list">
          <div className="cont-title">
            <img src="images/icon_cont.png" />
            <div>
              <h2>Contributors</h2>
              <p>
                We thank all contributors for their efforts in the development
                of RGB++ protocol and ecosystem.
              </p>
            </div>
          </div>
          <div className="cont-box">
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th align="left">Title</th>
                  {/* <th align="left">Label</th> */}
                  <th align="left">Twitter/Github link</th>
                </tr>
              </thead>
              <tbody>
                {contributorsList.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <img src={item.avator} className="avatar" />
                      </td>
                      <td align="left">{item.name} </td>
                      <td align="left">{item.title} </td>
                      {/* <td align="left"><span className={"tag tag_"+item.label}>{item.label}</span> </td> */}
                      <td align="left">
                        <Link href={item.twitter}>{item.twitter}</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contributors;
