import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Controls from './controls/controls';

const Preview = () => {
  const [controls, setControls] = useState([]);
  const { emoji } = useSelector((state) => state);

  useEffect(() => {
    const keys = Object.keys(emoji);
    const availableControls = keys.filter((each) => emoji[each] !== null);
    setControls(availableControls);
  }, [emoji]);

  let previewImgs = null;
  let ctrls = null;

  if (controls) {
    previewImgs = controls.map((each) => emoji[each] && (
      <S.EmojiPart
        key={each}
        src={emoji[each].url}
        alt={emoji[each].id}
        xAxis={emoji[each].position?.xAxis ?? 5}
        yAxis={emoji[each].position?.yAxis ?? 5}
        size={emoji[each].position?.size ?? 1}
      />
    ));

    ctrls = controls.map((each) => (
      <Controls key={each} part={each} emoji={emoji} />
    ));
  }

  return (
    <S.PreviewContainer>
      <S.PreviewArea>
        {previewImgs}
      </S.PreviewArea>
      <S.ControlsContainer>
        {ctrls}
      </S.ControlsContainer>
    </S.PreviewContainer>
  );
};

export default Preview;
