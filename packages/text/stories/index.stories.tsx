import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Text} from '../src';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <Text>Some text</Text>;
  });
