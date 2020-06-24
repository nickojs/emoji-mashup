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
    case actionTypes.BODY: return { ...state, body: action.value };
    case actionTypes.EFFECTS: return { ...state, effects: action.value };
    case actionTypes.EYES: return { ...state, eyes: action.value };
    case actionTypes.MOUTH: return { ...state, mouth: action.value };
    case actionTypes.NOSE: return { ...state, nose: action.value };
    default: return { ...state };
  }
};

export default reducer;