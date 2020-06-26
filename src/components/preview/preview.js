import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

const Preview = () => {
  /*
    emoji is a js object containing the five emoji parts properties:
    body, effects, eyes, mouth and nose
  */
  const { emoji } = useSelector((state) => state);
  const emojiKeys = Object.keys(emoji);

  return (
    <S.PreviewArea>
      {emojiKeys.map((each) => (
        <img
          key={each}
          src={emoji[each]?.url}
          alt={emoji[each]?.id}
        />
      ))}

    </S.PreviewArea>
  );
};

export default Preview;
