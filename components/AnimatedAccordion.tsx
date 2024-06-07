import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedAccordion: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen?'accordion accordionOpen':' accordion'} onClick={()=>setIsOpen(!isOpen)}>
      <div className="accordion-title" >
        {title}
       
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

export default AnimatedAccordion;
