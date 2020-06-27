import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';

import formConfig from './formConfig';

const Controls = ({ part }) => {
  const [emojiPos, setEmojiPos] = useState(null);
  const [inputs, setInputs] = useState(formConfig);
  const dispatch = useDispatch();

  // watches changes on the input to register emojiPos(ition)
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

  // updates current emoji position
  useEffect(() => {
    dispatch({ type: 'POSITION', part, position: emojiPos });
  }, [dispatch, part, emojiPos]);

  const inputChangeHandler = (event, identifier) => {
    const currentForm = { ...inputs };
    const currentElement = { ...currentForm[identifier] };
    currentElement.value = event.target.value;

    currentForm[identifier] = { ...currentElement };
    setInputs(currentForm);
  };

  const resetFormHandler = () => { setInputs(formConfig); };

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

  useEffect(() => {
    console.log('resetting controls...');
    resetFormHandler();
  }, []);

  return (
    <S.InnerControls>
      <p>{part}</p>
      {form}
      <button
        type="button"
        onClick={resetFormHandler}
      > Clear
      </button>
    </S.InnerControls>
  );
};

export default Controls;