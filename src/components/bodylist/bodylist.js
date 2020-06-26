import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import EmojiList from '../emojiList/emojiList';

const Bodylist = () => {
  const [selectedType, setSelectedType] = useState(null);
  const { assets } = useSelector((state) => state);

  const bodyTypeHandler = (value) => {
    setSelectedType((pState) => (pState === value ? null : value));
  };

  const bodyparts = Object.keys(assets).map((type) => (
    <S.BodyPart
      key={type}
      selected={selectedType === type}
      onClick={() => bodyTypeHandler(type)}
    >
      {type}
    </S.BodyPart>
  ));

  return (
    <>
      <S.BodyPartList>
        {bodyparts}
      </S.BodyPartList>
      <EmojiList
        type={selectedType}
        list={assets[selectedType]}
      />
    </>
  );
};

export default Bodylist;
