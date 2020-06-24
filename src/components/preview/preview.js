import React from 'react';
import * as S from './styles';

const Preview = ({ emoji }) => {
  /*
    emoji is a js object containing the five emoji parts properties:
    body, effects, eyes, mouth and nose
  */
  const emojiKeys = Object.keys(emoji);

  return (
    <S.PreviewArea>
      {emojiKeys.map((each) => emoji[each] && (
        <img
          key={each}
          src={emoji[each].url}
          alt={each}
        />
      ))}

    </S.PreviewArea>
  );
};

export default Preview;
