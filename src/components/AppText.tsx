import React from 'react';
import { Text, TextProps } from 'react-native';

const AppText: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default AppText;
