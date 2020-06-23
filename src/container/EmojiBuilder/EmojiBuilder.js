import React, { useReducer } from 'react';
import EmojiList from '../../components/emojiList/emojiList';
import assets from '../../assets/mappedEmojiAssets.json';

const initialState = {
  body: null,
  effects: null,
  eyes: null,
  mouth: null,
  nose: null
};

const emojiReducer = (state, action) => {
  switch (action.type) {
    case 'BODY':
      return { ...state, body: action.value };
    case 'EFFECTS':
      return { ...state, effects: action.value };
    case 'EYES':
      return { ...state, eyes: action.value };
    case 'MOUTH':
      return { ...state, mouth: action.value };
    case 'NOSE':
      return { ...state, nose: action.value };

    default:
      throw new Error('reducer error');
  }
};

const EmojiBuilder = () => {
  const types = Object.keys(assets);
  const [state, dispatch] = useReducer(emojiReducer, initialState);

  return (
    <div>
      <h1>Emoji builder haha</h1>
      {types.map((type) => (
        <EmojiList
          key={type}
          bodypart={type}
          assets={assets[type]}
          setFinalEmoji={(value) => dispatch({ type: type.toUpperCase(), value })}
        />
      ))}
    </div>
  );
};

export default EmojiBuilder;
