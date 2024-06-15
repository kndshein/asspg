import { useState, useEffect, useCallback } from 'react';

// https://codepen.io/hug0hq/pen/OJXXLyB
export default function Scrambles({ text, newRender }) {
  const [activeText, setActiveText] = useState(0);

  const shuffle = (word) => {
    return word
      .split('')
      .sort(() => {
        return 0.5 - Math.random();
      })
      .join('');
  };

  const gen = useCallback((word) => {
    let textArray = [];
    setActiveText(0);
    if (word) {
      //variations with change in size
      for (let i = word.length; i >= 0; i--) {
        let tmp = shuffle(word);
        tmp = tmp.slice(0, word.length - i);
        textArray.push(tmp);
      }
      //variations without change in size
      for (let i = 0; i < 6; i++) {
        textArray.push(shuffle(word));
      }
      //normal text
      textArray.push(word);
    }
    return textArray;
  }, []);

  const [textArray, setTextArray] = useState(gen);

  useEffect(() => {
    let interval = null;
    if (activeText < textArray.length - 1) {
      interval = setInterval(() => {
        setActiveText(activeText + 1);
      }, 40);
    }
    return () => clearInterval(interval);
  }, [activeText, textArray.length]);

  useEffect(() => {
    setTextArray(gen(text));
  }, [gen, text, newRender, textArray.length]);

  return (
    <p className="animate-pulse text-2xl font-mono text-white">
      {textArray[activeText]}
    </p>
  );
}
