import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import formConfig from './formConfig';

const Controls = ({ part, emoji }) => {
  const [emojiPos, setEmojiPos] = useState(null);
  const [inputs, setInputs] = useState(formConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      const object = {
        xAxis: inputs.xAxis.value,
        yAxis: inputs.yAxis.value,
        size: inputs.size.value
      };
      setEmojiPos(object);
    }, 10);

    return () => clearTimeout(timer);
  }, [inputs]);

  useEffect(() => {
    /* I KNOW THIS IS MESSY AF, but is the only way I got this effect
       to run without entering an infinite loop. Hell, I'm even worried
       that this comment will break something up */

    if (!emoji[part]) return;

    const timer = setTimeout(() => {
      const emojiPosition = JSON.stringify(emoji[part].position); // starts {}
      const currentPosition = JSON.stringify(emojiPos); // starts null

      if (emojiPosition !== currentPosition) {
        const updatedEmoji = {
          ...emoji[part],
          position: {
            ...emoji[part].position,
            ...emojiPos
          }
        };
        dispatch({ type: part.toUpperCase(), value: updatedEmoji });
      }
    }, 15);

    return () => clearTimeout(timer);
  }, [dispatch, part, emojiPos, emoji]);

  const inputChangeHandler = (event, identifier) => {
    const currentForm = { ...inputs };
    const currentElement = { ...currentForm[identifier] };
    currentElement.value = event.target.value;

    currentForm[identifier] = { ...currentElement };
    setInputs(currentForm);
  };

  const resetFormHandler = () => {
    setInputs(formConfig);
  };

  const form = Object.keys(inputs).map((input) => (
    <label htmlFor={input} key={input}>{input}
      <input
        name={input}
        type={inputs[input].type}
        min={inputs[input].min}
        max={inputs[input].max}
        step={inputs[input].step}
        value={inputs[input].value}
        onChange={(e) => inputChangeHandler(e, input)}
      />
    </label>
  ));

  return (
    <div>
      <p>{part}</p>
      {form}
      <button
        type="button"
        onClick={resetFormHandler}
      > Clear
      </button>
    </div>
  );
};

export default Controls;
