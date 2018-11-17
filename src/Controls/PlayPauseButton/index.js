import React from 'react';

import { ButtonContainer, ButtonIcon } from './styles';

const PlayPauseButton = ({ playing, clickCallback }) => (
  <ButtonContainer
    onClick={clickCallback}
  >
    <ButtonIcon
      playing={playing}
    />
  </ButtonContainer>
);

export default PlayPauseButton;
