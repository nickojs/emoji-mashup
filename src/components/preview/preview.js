import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';

const Preview = () => {
  const [controls, setControls] = useState([]);
  const { emoji } = useSelector((state) => state);
  const dispatch = useDispatch();

  const emojiKeys = Object.keys(emoji);

  useEffect(() => {
    const keys = Object.keys(emoji);
    const availableControls = keys.filter((each) => emoji[each] !== null);
    setControls(availableControls);
  }, [emoji]);

  const setEmojiPartPosition = (part, el) => {
    const currentEmoji = emoji[part];
    currentEmoji.position[el.target.name] = el.target.value;
    dispatch({ type: part.toUpperCase(), value: currentEmoji });
  };

  return (
    <>
      <S.PreviewArea>
        {emojiKeys.map((each) => (
          <img
            key={each}
            src={emoji[each]?.url}
            alt={emoji[each]?.id}
          />
        ))}
      </S.PreviewArea>
      <div>
        <p>Adjust your emoji:</p>
        {controls.map((each) => (
          <div key={each}>
            <p>{each}</p>
            <label htmlFor="xAxis">X axis
              <input
                name="xAxis"
                type="range"
                min="0"
                max="10"
                step=".2"
                defaultValue="5"
                onChange={(e) => setEmojiPartPosition(each, e)}
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
                onChange={(e) => setEmojiPartPosition(each, e)}
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
                onChange={(e) => setEmojiPartPosition(each, e)}
              />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Preview;
