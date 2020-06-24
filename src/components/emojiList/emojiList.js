import React, { useState } from 'react';
import * as S from './styles';
import Emoji from './emoji';
import Selection from './selection';

const EmojiList = ({ bodypart, assets, setFinalEmoji }) => {
  const keyAssets = Object.keys(assets);
  const [emojiPart, setEmojiPart] = useState(null);

  const emojiPartHandler = (value) => {
    const final = {
      id: value,
      url: assets[value]
    };
    setFinalEmoji(emojiPart === value ? null : final);
    setEmojiPart((pState) => (pState === value ? null : value));
  };

  return (
    <S.ListWrapper>
      <div>
        <S.BodyPartTitle>{bodypart.toUpperCase()}</S.BodyPartTitle>
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
      <Selection>
        {emojiPart ? (
          <Emoji
            image={assets[emojiPart]}
            alt={bodypart}
          />
        ) : <p>None...</p>}
      </Selection>
    </S.ListWrapper>
  );
};

export default EmojiList;
