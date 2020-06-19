const importAll = (r) => r.keys().map(r);

const emojiParts = {
  body: importAll(require.context('../assets/emojiParts/body', false, /\.(png)$/)),
  eyes: importAll(require.context('../assets/emojiParts/eyes', false, /\.(png)$/)),
  nose: importAll(require.context('../assets/emojiParts/nose', false, /\.(png)$/)),
  mouth: importAll(require.context('../assets/emojiParts/mouth', false, /\.(png)$/)),
  effects: importAll(require.context('../assets/emojiParts/effects', false, /\.(png)$/))
};

export default emojiParts;
