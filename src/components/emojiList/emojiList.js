import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import Emoji from './emoji';

const EmojiList = ({ type, list }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const { emoji } = useSelector((state) => state);
  const dispatch = useDispatch();

  const emojiHandler = (value) => {
    /* the current UI (selectedEmoji) and redux store values are being
       toggled if the user clicks on the same emoji part twice,
       removing its selection */
    setSelectedEmoji((pState) => (pState === value ? null : value));
    const emojiValues = {
      id: value,
      url: list[value]
    };
    dispatch({
      type: type.toUpperCase(),
      value: emoji[type]?.id === value
        ? null
        : emojiValues
    });
  };

  // restore UI state from redux store
  useEffect(() => { setSelectedEmoji(emoji[type]?.id); }, [type, emoji]);

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
