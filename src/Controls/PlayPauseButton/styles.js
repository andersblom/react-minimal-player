import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  outline: 0;
  box-shadow: none;
  border: none;
  padding: 0;
  background-color: transparent;
`;

export const ButtonIcon = styled.div`
  /* https://css-tricks.com/making-pure-css-playpause-button/ */
  width: 16px;
  height: 16px;
  border-style: solid;
  box-sizing: border-box;
  border-width: 8px 0px 8px 14px;
  border-color: transparent transparent transparent #ffffff;

 ${props => props.playing && css`
    border-style: double;
    border-width: 0px 0px 0px 10px;
 `}
`;