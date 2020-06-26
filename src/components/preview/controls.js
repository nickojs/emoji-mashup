import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Controls = ({ part, emoji }) => {
  const [emojiPos, setEmojiPos] = useState(null);
  const dispatch = useDispatch();

  const positionHandler = (event) => {
    const position = {
      [event.target.name]: event.target.value
    };
    const currentEmoji = { ...emoji[part], position: { ...position } };
    setEmojiPos(currentEmoji);
  };

  useEffect(() => {
    let timer;
    if (emojiPos) {
      timer = setTimeout(() => {
        dispatch({ type: part.toUpperCase(), value: emojiPos });
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [dispatch, emojiPos, part]);

  return (
    <div>
      <p>{part}</p>
      <label htmlFor="xAxis">X axis
        <input
          name="xAxis"
          type="range"
          min="0"
          max="10"
          step=".2"
          defaultValue="5"
          onChange={(e) => positionHandler(e)}
        />
      </label>
      <label htmlFor="yAxis">Y axis
        <input
          name="yAxis"
          type="range"
          min="0"
          max="10"
          step=".2"
          defaultValue="5"
          onChange={(e) => positionHandler(e)}
        />
      </label>
      <label htmlFor="size">Scale
        <input
          name="size"
          type="range"
          min="0"
          max="10"
          step=".2"
          defaultValue="5"
          onChange={(e) => positionHandler(e)}
        />
      </label>
    </div>
  );
};

export default Controls;