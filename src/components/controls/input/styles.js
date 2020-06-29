import styled from 'styled-components';

export const InnerControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-width: 300px;
  
  padding: 6px;
  margin: 6px auto;
  box-sizing: border-box;

  background: #CCC;

  * { max-width: 100% }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PartTitle = styled.h1`
  padding: 7px;

  text-align: center;
  font-size: 2em;
  font-weight: bold;
  
  color: white;
  background: #EEE;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px; 
`;

export const InputRange = styled.input`
  -webkit-appearance: none;
  width: 80%;
  height: 4px;
  border-radius: 5px;
  background: #FFF;
  outline: none;
  padding: 0;
  margin: 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #1abc9c;
    cursor: pointer;
    transition: background .15s ease-in-out;

    &:hover { background: #1abc9c }
  }


  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: #1abc9c;
    cursor: pointer;
    transition: background .15s ease-in-out;

    &:hover { background: #1abc9c; }
  }


`;
