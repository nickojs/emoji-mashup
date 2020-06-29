/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';

const Input = ({
  formConfig, position, setEmojiPos, removeEmoji
}) => {
  const [inputs, setInputs] = useState(formConfig);

  const inputChangeHandler = (event, identifier) => {
    const currentForm = { ...inputs };
    const currentElement = { ...currentForm[identifier] };
    currentElement.value = event.target.value;

    currentForm[identifier] = { ...currentElement };
    setInputs(currentForm);
  };
  const resetFormHandler = useCallback(() => { setInputs(formConfig); }, [formConfig]);

  // watches changes on the input to register emojiPos(ition)
  useEffect(() => {
    const timer = setTimeout(() => {
      const values = {
        part: inputs.part,
        xAxis: inputs.xAxis.value,
        yAxis: inputs.yAxis.value,
        size: inputs.size.value
      };
      setEmojiPos(values);
      console.log('setemojis');
    }, 10);
    return () => clearTimeout(timer);
  }, [setEmojiPos, inputs]);

  // resets the form on emoji change
  useEffect(() => {
    if (!position) { resetFormHandler(); }
  }, [resetFormHandler, position]);

  const form = Object.keys(inputs).filter((key) => key !== 'part').map((input) => (
    <S.Label htmlFor={input} key={input}>{input}
      <S.InputRange
        {...inputs[input]}
        onChange={(e) => inputChangeHandler(e, input)}
      />
    </S.Label>
  ));

  return (
    <S.InnerControls>
      <S.PartTitle>{inputs.part}</S.PartTitle>
      {form}
      <S.ButtonsContainer>
        <S.ButtonWrapper>
          <S.UndoButton
            type="button"
            onClick={resetFormHandler}
          > Clear
          </S.UndoButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <S.RemoveButton
            type="button"
            onClick={removeEmoji}
          > Remove
          </S.RemoveButton>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.InnerControls>
  );
};

export default Input;
