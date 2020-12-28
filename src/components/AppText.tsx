import React, { memo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

const AppText: React.FC<TextProps> = ({ children, style, bold, black, regular, ...props }) => {
  const textStyle = [style, styles.regular];

  if (bold) {
    textStyle.push(styles.bold);
  }

  if (black) {
    textStyle.push(styles.black);
  }

  return <Text style={textStyle} {...props}>{children}</Text>;
}; 

const styles = StyleSheet.create({
  regular:{
    fontFamily: 'HankRnd-Regular',
  },
  bold:{
    fontFamily: 'HankRnd-Bold ',
  },
  black:{
    fontFamily: 'HankRnd-Black',
  },
});

export default memo(AppText);
