import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from './input/input';
import Carousel from '../carousel/carousel';
import formConfig from './input/formConfig';

const Controls = () => {
  const [emojiPos, setEmojiPos] = useState(null);
  const { emoji } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!emojiPos) return;

    const timer = setTimeout(() => {
      const {
        part, xAxis, yAxis, size
      } = emojiPos;
      const position = { xAxis, yAxis, size };
      dispatch({ type: 'POSITION', part, position });
      console.log('hi');
    }, 10);

    return () => clearTimeout(timer);
  }, [dispatch, emojiPos]);

  const availableInputs = Object.keys(emoji).filter((em) => emoji[em] !== null);
  const inputs = availableInputs.map((each) => (
    <Input
      key={each}
      position={emoji[each].position || null}
      setEmojiPos={setEmojiPos}
      removeEmoji={() => dispatch({ type: each.toUpperCase(), value: null })}
      formConfig={() => formConfig(each)}
    />
  ));

  return (
    <Carousel>
      {inputs}
    </Carousel>
  );
};

export default Controls;
