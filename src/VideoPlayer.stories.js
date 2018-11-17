import React from 'react';

import { storiesOf } from '@storybook/react';

import VideoPlayer from './VideoPlayer';

storiesOf('VideoPlayer', module)
  .add('Default', () => <VideoPlayer width="500px" />);