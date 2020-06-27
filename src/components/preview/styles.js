import styled from 'styled-components';

export const PreviewContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
`;

export const PreviewArea = styled.div`
  position: relative;

  width: 200px;
  height: 200px;
  margin: 24px auto;
  background: #CCC;
  
  box-sizing: border-box;
`;

export const EmojiPart = styled.img`
  position: absolute;
  top: ${({ yAxis }) => `${yAxis * 10}%`}; 
  left: ${({ xAxis }) => `${xAxis * 10}%`};  
  transform: translate(-50%, -50%) ${({ size }) => `scale(${size})`};
`;
