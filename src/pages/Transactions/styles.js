import styled from 'styled-components';

export const Main = styled.div`
    min-height: 100vh;
    padding-bottom: 80px;
    background-color: #F3F3F3;

    
    overflow-x: hidden;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;