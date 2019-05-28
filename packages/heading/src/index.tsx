import * as React from 'react';
import {Text} from '@monorepo/text';

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({children}) => <Text>{children}</Text>;

Heading.defaultProps = {};

export {Heading};
