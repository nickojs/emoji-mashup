import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Controls from './controls';

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
      <img
        key={each}
        src={emoji[each].url}
        alt={emoji[each].id}
        position={emoji[each].position}
      />
    ));

    ctrls = controls.map((each) => (
      <Controls key={each} part={each} emoji={emoji} />
    ));
  }

  return (
    <>
      <S.PreviewArea>
        {previewImgs}
      </S.PreviewArea>
      <div>
        <p>Adjust your emoji:</p>
        {ctrls}
      </div>
    </>
  );
};

export default Preview;
