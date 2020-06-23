import React from 'react';
import EmojiList from '../../components/emojiList/emojiList';
import assets from '../../assets/mappedEmojiAssets.json';

const EmojiBuilder = () => {
  const types = Object.keys(assets);

  return (
    <div>
      <h1>Emoji builder haha</h1>
      {types.map((type) => (
        <EmojiList
          key={type}
          bodypart={type}
          assets={assets[type]}
        />
      ))}
    </div>
  );
};

export default EmojiBuilder;
