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
    }, 500);

    return () => clearTimeout(timer);
  }, [inputs]);

  useEffect(() => {
    const updatedEmoji = {
      ...emoji[part],
      position: {
        ...emoji[part].position,
        ...emojiPos
      }
    };
    dispatch({ type: part.toUpperCase(), value: updatedEmoji });
  }, [dispatch, emojiPos]);

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
