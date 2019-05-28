import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Heading} from '../src';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <Heading>I am a Very Large Heading</Heading>;
  });
