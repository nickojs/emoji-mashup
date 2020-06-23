import styled, { css } from 'styled-components';

const smallList = css`
  overflow-y: none;
  height: auto;
`;

const regularList = css`
  overflow-y: scroll;
  height: 200px;
`;

export const EmojiList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;

  ${({ length }) => (length > 4 ? regularList : smallList)};

  width: 80%; 
  max-width: 750px;
  padding: 8px;
  margin: 12px auto;
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

export const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Selection = styled.div`
  flex-grow: 1;
  background: #CCC;
`;
