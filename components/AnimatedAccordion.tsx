import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedAccordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useSpring({ height: isOpen ? 'auto' : 0 });

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <animated.div className="accordion-content" style={animation}>
        {content}
      </animated.div>
    </div>
  );
};

export default AnimatedAccordion;