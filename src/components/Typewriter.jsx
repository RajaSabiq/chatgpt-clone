import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200); // Adjust typing speed here
      return () => clearTimeout(timer);
    } else {
      setIndex(0);
      setDisplayText('');
    }
  }, [index, text]);

  return <span className='typewriter'>{displayText}</span>;
};

export default Typewriter;
