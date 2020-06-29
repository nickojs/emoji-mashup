import styled from 'styled-components';
import { ReactComponent as RemoveIcon } from '../../../assets/icons/trash.svg';
import { ReactComponent as UndoIcon } from '../../../assets/icons/undo.svg';

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

export const PartTitle = styled.h1`
  padding: 7px;

  text-align: center;
  font-size: 2em;
  font-weight: bold;
  
  color: white;
  background: #EEE;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 60px; height: 60px;
  padding: 12px; margin: 12px;

  box-sizing: border-box;
  cursor: pointer;

  background: gold;
  border: 1px solid black;
  border-radius: 12px;

  :hover svg{ 
    fill: lime;
  }

  svg{ 
    width: 100%; height: 100%;
    transition: fill .20s;
  }
`;

export const RemoveButton = styled(RemoveIcon)` `;
export const UndoButton = styled(UndoIcon)``;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px; 
`;
