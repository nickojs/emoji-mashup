import React from 'react';
import Emoji from './emoji';
import * as S from './styles';

const EmojiList = ({ list }) => {
  const listKeys = Object.keys(list);

  return (
    <S.EmojiList>
      {listKeys.map((key) => (
        <li>
          <Emoji
            image={list[key]}
            alt={key}
          />
        </li>
      ))}
    </S.EmojiList>
  );
};

export default EmojiList;
