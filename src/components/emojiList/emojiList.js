import React from 'react';
import Emoji from './emoji';

const EmojiList = ({ list }) => {
  const listKeys = Object.keys(list);

  return (
    <ul>
      {listKeys.map((key) => (
        <li>
          <Emoji
            image={list[key]}
            alt={key}
          />
        </li>
      ))}
    </ul>
  );
};

export default EmojiList;
