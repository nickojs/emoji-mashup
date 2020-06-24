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

  const types = Object.keys(assets);
  const bodyparts = types && types.map((type) => (
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
      <EmojiList type={selectedType} />
    </>
  );
};

export default Bodylist;
