import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

const Preview = () => {
  const [controls, setControls] = useState([]);
  const { emoji } = useSelector((state) => state);
  const emojiKeys = Object.keys(emoji);

  useEffect(() => {
    const keys = Object.keys(emoji);
    const availableControls = keys.filter((each) => emoji[each] !== null);
    setControls(availableControls);
  }, [emoji]);

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
              <input name="xAxis" type="range" min="0" max="10" defaultValue="5" step=".2" />
            </label>
            <label htmlFor="yAxis">Y axis
              <input name="yAxis" type="range" min="0" max="10" defaultValue="5" step=".2" />
            </label>
            <label htmlFor="size">Scale
              <input name="size" type="range" min="0" max="10" defaultValue="5" step=".2" />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Preview;
