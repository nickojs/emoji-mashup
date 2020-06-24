import styled from 'styled-components';

export const BodyPartList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: auto;
  box-shadow: 0 16px 4px -2px rgba(0, 0, 0, 0.7);
`;

export const BodyPart = styled.li`
  flex-grow: 1;
  padding: 24px;
  cursor: pointer;
  text-align: center;

  color: white;
  background: lightcoral;

  :hover{
    color: lightcoral;
    background: white;
  }
`;
