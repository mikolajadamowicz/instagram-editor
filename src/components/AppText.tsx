import React from 'react';
import { Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const AppText: React.FC<Props> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default AppText;
