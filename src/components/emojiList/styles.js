import styled from 'styled-components';

export const EmojiList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  
  overflow-y: auto;
  padding-top: 10px;
  max-height: 400px;
  max-width: 900px;
`;

export const EmojiWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;

  padding: 6px; margin: 2px;
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
