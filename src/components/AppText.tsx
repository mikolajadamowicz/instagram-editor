import React, { memo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { COLORS } from '../constants';

type Props = {
  regular?: boolean;
  black?: boolean;
  bold?: boolean;
  children: React.ReactNode;
} & TextProps;

const AppText = ({ children, style, bold, black, ...props }: Props) => {
  const textStyle = [style, styles.regular];

  if (bold) {
    textStyle.push(styles.bold);
  }

  if (black) {
    textStyle.push(styles.black);
  }

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'HankRnd-Regular',
    color: COLORS.text,
  },
  bold: {
    fontFamily: 'HankRnd-Bold ',
  },
  black: {
    fontFamily: 'HankRnd-Black',
  },
});

export default memo(AppText);
