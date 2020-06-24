import React, { useState, useEffect } from 'react';
import * as S from './styles';
import EmojiList from '../emojiList/emojiList';

const Bodylist = ({ assets }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [emojiList, setEmojiList] = useState({});

  const types = Object.keys(assets);

  const bodyTypeHandler = (value) => {
    setSelectedType((pState) => (pState === value ? null : value));
  };

  useEffect(() => {
    if (!selectedType) return;
    setEmojiList(assets[selectedType]);
  }, [assets, selectedType]);

  return (
    <>
      <S.BodyPartList>
        {types.map((type) => (
          <S.BodyPart
            key={type}
            onClick={() => bodyTypeHandler(type)}
          >{type}
          </S.BodyPart>
        ))}
      </S.BodyPartList>
      <EmojiList list={emojiList} />
    </>
  );
};

export default Bodylist;
