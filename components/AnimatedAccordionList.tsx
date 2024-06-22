import React, { useState } from "react";
interface item {
    title: string;
    content: string;
  }
interface ListProps {
    list: item[];
  }
const AnimatedAccordionList: React.FC<ListProps> = (
  {list}
) => {
  const [openIndex, setOpenIndex] = useState(-1);
  console.log(list);
  const toggleOpen = (index:any)=>{
    if(index!==-1){
      setOpenIndex(index)
    }else{
      setOpenIndex(-1)
    }
  }
  return (
    <>
      {list &&
        list.map((item, index) => {
          return (
            <div
              key={index}
              className={
                openIndex === index ? "accordion accordionOpen" : " accordion"
              }
              onClick={() => toggleOpen(openIndex == index ?-1:index)}
            >
              <div className="accordion-title">{item.title}</div>
              <div className="accordion-content">{item.content}</div>
            </div>
          );
        })}
    </>
  );
};

export default AnimatedAccordionList;
