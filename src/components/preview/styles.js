import styled from 'styled-components';

export const PreviewArea = styled.div`
  position: relative;

  width: 200px;
  height: 200px;
  margin: 24px auto;
  background: #CCC;
  
  box-sizing: border-box;

  img{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%)
  }
`;
