import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import Emoji from './emoji';

const EmojiList = ({ type, list }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const { emoji } = useSelector((state) => state);
  const dispatch = useDispatch();

  const emojiHandler = (value) => {
    setSelectedEmoji((pState) => (pState === value ? null : value));
    // maybe later export this dispatch into a useEffect
    dispatch({ type: type.toUpperCase(), value });
  };

  // syncs selectedEmoji with store
  useEffect(() => {
    setSelectedEmoji(emoji[type]);
  }, [emoji, type]);

  let emojiList = <p>No option selected...</p>;
  if (list) {
    emojiList = Object.keys(list).map((key) => (
      <li key={key}>
        <Emoji
          selected={selectedEmoji === key}
          clicked={() => emojiHandler(key)}
          image={list[key]}
          alt={key}
        />
      </li>
    ));
  }

  return (
    <S.EmojiList>
      {emojiList}
    </S.EmojiList>
  );
};

export default EmojiList;
