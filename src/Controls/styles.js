import styled, { css } from 'styled-components';

export const ControlsContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-y: hidden;

  .inner {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);

    
    transform: translateY(100%);
    transition: 200ms ease-in;
    ${props => props.visible && css`
      transform: translateY(0);
    `}
  }
  
  .time {
    color: #ffffff;
  }
`;