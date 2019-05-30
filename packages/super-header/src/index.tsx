import * as React from 'react';
import {Heading} from '@monorepo/heading';

interface SuperHeadingProps {
  children: React.ReactNode;
}

const SuperHeading: React.FC<SuperHeadingProps> = ({children}) => <Heading>{children}</Heading>;

Heading.defaultProps = {};

export {SuperHeading, Heading};
