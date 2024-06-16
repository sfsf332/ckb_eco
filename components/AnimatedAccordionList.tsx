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
  const [openIndex, setOpenIndex] = useState(0);
  console.log(list);
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
              onClick={() => setOpenIndex(index)}
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
