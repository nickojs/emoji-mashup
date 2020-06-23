import React from 'react';

const EmojiList = ({ bodypart, assets }) => {
  const keyAssets = Object.keys(assets);

  return (
    <div>
      <h1>Body part: {bodypart}</h1>
      <ul>
        {keyAssets.map((each) => (
          <img
            key={each}
            src={assets[each]}
            alt={bodypart}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmojiList;
