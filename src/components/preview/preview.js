import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import compareArr from '../../helpers/compareArr';

const Preview = () => {
  const [emojiParts, setEmojiParts] = useState([]);
  const { emoji } = useSelector((state) => state);

  useEffect(() => {
    const keys = Object.keys(emoji);
    const availableParts = keys.filter((each) => emoji[each] !== null);
    const compareControls = compareArr(emojiParts, availableParts);

    // exits the effect if control didn't changed
    if (compareControls) return;

    // sets new controls
    setEmojiParts(availableParts);
  }, [emojiParts, emoji]);

  let previewImgs = null;

  if (emojiParts.length > 0) {
    previewImgs = emojiParts.map((each) => emoji[each] && (
      <S.EmojiPart
        key={each}
        src={emoji[each].url}
        alt={emoji[each].id}
        xAxis={emoji[each].position?.xAxis ?? 5}
        yAxis={emoji[each].position?.yAxis ?? 5}
        size={emoji[each].position?.size ?? 1}
      />
    ));
  }

  return (
    <S.PreviewContainer>
      <S.PreviewArea>
        {previewImgs}
      </S.PreviewArea>
    </S.PreviewContainer>
  );
};

export default Preview;
