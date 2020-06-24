import React from 'react';
import * as S from './styles';

const Emoji = ({
  selected, clicked, image, alt
}) => (
  <S.EmojiWrapper
    selected={selected}
    onClick={clicked}
  >
    <S.EmojiImg
      src={image}
      alt={alt}
    />
  </S.EmojiWrapper>
);

export default Emoji;
