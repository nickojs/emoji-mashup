import styled, { css } from 'styled-components';

const smallList = css`
  overflow-y: none;
  height: auto;
`;

const regularList = css`
  overflow-y: scroll;
  height: 200px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const EmojiList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;

  max-width: 750px;
  padding: 8px;

  ${({ length }) => (length > 4 ? regularList : smallList)};
`;

export const BodyPartTitle = styled.h1`
  padding: 12px;
  
  font-family: sans-serif;
  font-weight: 700;

  color: white;
  box-shadow: 1px 1px 10px blue;
  border-radius: 12px 0 12px 0;
  background: darkblue;
`;

export const EmojiWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;

  padding: 6px; margin: 6px;
  width: 120px;
  
  background: gray;
  ${({ selected }) => (selected ? 'background: gold;' : null)}

  :hover{ background: gold; }
`;

export const EmojiImg = styled.img` 
  display: block;
  margin: 0 auto;
  max-width: 100%; 
`;

export const Selection = styled.div`
  background: #CCC;
  margin: 0 auto;
  width: 150px;
`;
