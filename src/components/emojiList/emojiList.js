import React, { useState } from 'react';
import * as S from './styles';

const EmojiList = ({ bodypart, assets }) => {
  const keyAssets = Object.keys(assets);
  const [emojiPart, setEmojiPart] = useState(null);

  const emojiPartHandler = (value) => {
    setEmojiPart((prevState) => (prevState === value ? null : value));
  };

  return (
    <S.ListWrapper>
      <div>
        <h1>Body part: {bodypart}</h1>
        <S.EmojiList length={keyAssets.length}>
          {keyAssets.map((each) => (
            <S.EmojiWrapper
              key={each}
              selected={each === emojiPart}
              onClick={() => emojiPartHandler(each)}
            >
              <S.EmojiImg
                src={assets[each]}
                alt={bodypart}
              />
            </S.EmojiWrapper>
          ))}
        </S.EmojiList>
      </div>
      <S.Selection>
        <h2>Selection:</h2>
        {emojiPart || <p>None...</p>}
      </S.Selection>
    </S.ListWrapper>
  );
};

export default EmojiList;
