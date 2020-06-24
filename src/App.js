import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import assets from './assets/mappedEmojiAssets.json';
import EmojiBuilder from './container/EmojiBuilder/EmojiBuilder';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('init app..;');
    dispatch({ type: 'ASSETS', value: assets });
  }, [dispatch]);

  return (
    <div>
      <EmojiBuilder />
    </div>
  );
}

export default App;
