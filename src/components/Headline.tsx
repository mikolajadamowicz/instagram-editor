import React, { memo } from 'react';
import { TextProps } from 'react-native';
import AppText from './AppText';

type Props = {
  children: React.ReactNode;
} & TextProps;

const Headline = ({ children, ...props }: Props) => (
  <AppText header {...props}>
    {children}
  </AppText>
);

export default memo(Headline);
