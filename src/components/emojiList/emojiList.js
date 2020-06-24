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
  // useeffect to fetch the emoji object and check if current "type" has something,
  // if it has, put on selectedEmoji
  const list = assets[type];
  const emojiList = assets[type] && Object.keys(list).map((key) => (
    <li key={key}>
      <Emoji
        selected={selectedEmoji === key}
        clicked={() => emojiHandler(key)}
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
