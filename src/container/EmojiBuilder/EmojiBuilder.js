import React, { useReducer } from 'react';
import assets from '../../assets/mappedEmojiAssets.json';
import Preview from '../../components/preview/preview';
import Bodylist from '../../components/bodylist/bodylist';

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
  const [state, dispatch] = useReducer(emojiReducer, initialState);
  const types = Object.keys(assets);

  return (
    <div>
      <Preview emoji={state} assets={assets} />
      <Bodylist types={types} />
    </div>
  );
};

export default EmojiBuilder;
