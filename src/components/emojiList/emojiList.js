import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Emoji from './emoji';

const EmojiList = ({ type }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const { assets } = useSelector((state) => state);

  const emojiHandler = (value) => {
    setSelectedEmoji((pState) => (pState === value ? null : value));
  };

  const list = assets[type];
  const emojiList = assets[type] && Object.keys(list).map((key) => (
    <li>
      <Emoji
        selected={selectedEmoji === key}
        onClick={() => emojiHandler(key)}
        image={list[key]}
        alt={key}
      />
    </li>
  ));

  return (
    <S.EmojiList>
      {emojiList}
    </S.EmojiList>
  );
};

export default EmojiList;
