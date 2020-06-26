import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Controls from './controls';

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
          <Controls key={each} part={each} emoji={emoji} />
        ))}
      </div>
    </>
  );
};

export default Preview;
