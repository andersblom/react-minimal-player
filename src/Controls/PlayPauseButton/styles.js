import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  outline: 0;
  box-shadow: none;
  border: none;
  padding: 0;
`;

export const ButtonIcon = styled.div`
  box-sizing: border-box;
  height: 10px;
  
  border-color: transparent transparent transparent #202020;
  transition: 100ms all ease;
  will-change: border-width;
  cursor: pointer;

  border-style: solid;
  border-width: 10px 0 10px 4px;   

  ${props => !props.playing && css`
    border-style: double;
    border-width: 0px 0 0px 4px;
  `}
`;