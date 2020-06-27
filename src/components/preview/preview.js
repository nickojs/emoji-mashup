import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Controls from './controls/controls';

import compareArr from '../../helpers/compareArr';

const Preview = () => {
  const [controls, setControls] = useState([]);
  const { emoji } = useSelector((state) => state);

  useEffect(() => {
    const keys = Object.keys(emoji);
    const availableControls = keys.filter((each) => emoji[each] !== null);
    const compareControls = compareArr(controls, availableControls);

    // exits the effect if control didn't changed
    if (compareControls) return;

    // sets new controls
    setControls(availableControls);
  }, [controls, emoji]);

  let previewImgs = null;
  let ctrls = null;

  if (controls.length > 0) {
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
    // console.log('rendering controls');

    ctrls = controls.map((each) => (
      <Controls key={each} part={each} />
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
