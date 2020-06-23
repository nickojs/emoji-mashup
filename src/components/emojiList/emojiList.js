import React from 'react';
import * as S from './styles';

const EmojiList = ({ bodypart, assets }) => {
  const keyAssets = Object.keys(assets);

  return (
    <div>
      <h1>Body part: {bodypart}</h1>
      <S.EmojiList length={keyAssets.length}>
        {keyAssets.map((each) => (
          <S.EmojiWrapper key={each}>
            <S.EmojiImg
              src={assets[each]}
              alt={bodypart}
            />
          </S.EmojiWrapper>
        ))}
      </S.EmojiList>
    </div>
  );
};

export default EmojiList;
