import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  width: 100%;
  overflow-x: auto;
`;

export const InnerControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 150px;

  input{ width: 100px; }
`;
