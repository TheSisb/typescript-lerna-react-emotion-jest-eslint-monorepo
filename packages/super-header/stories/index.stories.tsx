import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {SuperHeading} from '../src';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <SuperHeading>I am a Very Large SuperHeading</SuperHeading>;
  });
