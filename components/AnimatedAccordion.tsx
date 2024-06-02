import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { useTransition, animated } from '@react-spring/web'

const AnimatedAccordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useSpring({ height: isOpen ? 'auto' : 0 });
  const [transitions, api] = useTransition('', () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }))
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