import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Controls = ({ part, emoji }) => {
  const [emojiPos, setEmojiPos] = useState(null);
  const dispatch = useDispatch();

  const positionHandler = (event) => {
    const position = {
      [event.target.name]: event.target.value
    };
    const currentEmoji = {
      ...emoji[part],
      position: {
        ...emoji[part].position,
        ...position
      }
    };
    setEmojiPos(currentEmoji);
  };

  useEffect(() => {
    if (emojiPos) {
      dispatch({ type: part.toUpperCase(), value: emojiPos });
    }
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
          step=".05"
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
          step=".05"
          defaultValue="5"
          onChange={(e) => positionHandler(e)}
        />
      </label>
      <label htmlFor="size">Scale
        <input
          name="size"
          type="range"
          min="0"
          max="2"
          step=".05"
          defaultValue="1"
          onChange={(e) => positionHandler(e)}
        />
      </label>
    </div>
  );
};

export default Controls;
