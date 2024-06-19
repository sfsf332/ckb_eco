import Link from "next/link";

import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import React, { useEffect, useMemo } from "react";
import EcoList from "../public/json/eco.json";
import dynamic from "next/dynamic";
import EcoBlock from "components/EcoBlock";
import Fuse from "fuse.js";
import { debounce } from "lodash";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});
interface EcoProp {

    img: string;
    name: string;
    tag: string[];
    link?: string;
    xlink?: string;
    rgbpp: boolean;
    desc: string;
 
}

const Eco = () => {
  const [showType, setShowType] = React.useState("");
  const [showList, setShowList] = React.useState<EcoProp[]>(EcoList);
  const [typeList, setTypeList] = React.useState([""]);
 
  const toggleShow = (type: string) => {
    let showListNew = EcoList.filter(item=>{
      return item.tag.includes(type)
    })
    setShowType(type);
    setShowList(showListNew);
  };
  async function search(criteria: string) {
    const options = {
      keys: [
        "desc",
        "name",
        "tag"
      ],
      threshold:0.1
    };
    if(criteria!==''){
      let fuse = new Fuse(EcoList, options);
      let filterList = fuse.search(criteria)
      if(filterList&&filterList.length>0){
        let newList: EcoProp[] = []
        filterList.map(item=>{
          newList.push(item.item)
        })
        return newList
      }
    }else{
      return EcoList
    }
  }
  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      let data = await search(criteria)
      setShowList(data||[]);
    }, 300)
  ).current;
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShowType('')

    debouncedSearch(e.target.value);
  }
  
  useEffect(() => {
    let tagList: [string] = [""];
    EcoList.map((item) => {
      item.tag.map((tagName) => {
        tagList.push(tagName);
      });
    });
    let showTypes = [...new Set(tagList)];
    setTypeList(showTypes);
  }, []);



  return (
    <>
      <Header />
      <main className={"eco-main " + RanadeFont.className}>
        <div className="eco-block-1">
          <div className="block-main">
            <h2 className={sharpieFont.className}>
              CKB Ecosystem: <br />A Nexus of Blockchain Evolution
            </h2>
            <h4>
              CKB Ecosystem is the core of cutting-edge innovation, uniting
              visionary thinkers and pioneers to propel the future of Nervos'
              blockchain technology with the power of UTXO Stack, RGB++ and
              Lightning Network.
            </h4>
            <div className="eco-links">
              <Link
                href="https://forms.gle/CVCgHXaeBZadRxa7A"
                target="_blank"
                className="button_link eco_link_1"
              >
                Submit Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="eco-block-2">
          <div className="block-main">
            <input
              type="text"
              placeholder="CKB Eco Fund"
              className="eco-search"
              onChange={handleChange}
            />

            <div className="tabs-title">
              {typeList &&
                typeList.map((tagName, index) => {
                  if (!tagName) return false;
                  return (
                    <span
                      key={index}
                      onClick={() => {
                        toggleShow(tagName);
                      }}
                      className={showType === tagName ? "sel" : ""}
                    >
                      {tagName}
                    </span>
                  );
                })}
            </div>
            <div className="eco-list">
              {showList.map((item, index) => {
                return <EcoBlock item={item} index={index} />
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

export default Eco;
