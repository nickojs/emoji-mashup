import React from 'react';
import Preview from '../../components/preview/preview';
import Bodylist from '../../components/bodylist/bodylist';
import Controls from '../../components/controls/controls';

const EmojiBuilder = () => (
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    <Preview />
    <Controls />
    <Bodylist />
  </div>
);

export default EmojiBuilder;
