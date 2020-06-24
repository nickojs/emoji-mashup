import styled from 'styled-components';

export const BodyPartList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
