import React, { useState } from 'react';
import * as S from './styles';
import Emoji from './emoji';

const EmojiList = ({ bodypart, assets, setFinalEmoji }) => {
  const keyAssets = Object.keys(assets);
  const [emojiPart, setEmojiPart] = useState(null);

  const emojiPartHandler = (value) => {
    setFinalEmoji(emojiPart === value ? null : value);
    setEmojiPart((pState) => (pState === value ? null : value));
  };

  return (
    <S.ListWrapper>
      <div>
        <h1>Body part: {bodypart}</h1>
        <S.EmojiList length={keyAssets.length}>
          {keyAssets.map((each) => (
            <Emoji
              key={each}
              selected={each === emojiPart}
              clicked={() => emojiPartHandler(each)}
              image={assets[each]}
              alt={bodypart}
            />
          ))}
        </S.EmojiList>
      </div>
      <S.Selection>
        <h2>Selection:</h2>
        {emojiPart ? (
          <Emoji
            image={assets[emojiPart]}
            alt={bodypart}
          />
        ) : <p>None...</p>}
      </S.Selection>
    </S.ListWrapper>
  );
};

export default EmojiList;
