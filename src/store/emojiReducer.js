import * as actionTypes from './actionTypes';
import assets from '../assets/mappedEmojiAssets.json';

const initialState = {
  assets,
  emoji: {
    body: null,
    effects: null,
    eyes: null,
    mouth: null,
    nose: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASSETS: return { ...state, assets: action.value };
    case actionTypes.BODY: return { ...state, emoji: { ...state.emoji, body: action.value } };
    case actionTypes.EFFECTS: return { ...state, emoji: { ...state.emoji, effects: action.value } };
    case actionTypes.EYES: return { ...state, emoji: { ...state.emoji, eyes: action.value } };
    case actionTypes.MOUTH: return { ...state, emoji: { ...state.emoji, mouth: action.value } };
    case actionTypes.NOSE: return { ...state, emoji: { ...state.emoji, nose: action.value } };
    case actionTypes.POSITION:
      return {
        ...state,
        emoji: {
          ...state.emoji,
          [action.part]: {
            ...state.emoji[action.part],
            position: {
              ...action.position
            }
          }
        }
      };
    default: return { ...state };
  }
};

export default reducer;
