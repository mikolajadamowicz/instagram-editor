import React, { memo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { COLORS } from '../constants';

type Props = {
  regular?: boolean;
  black?: boolean;
  bold?: boolean;
  header?: boolean;
  children: React.ReactNode;
} & TextProps;

const AppText = ({ children, style, bold, black, header, ...props }: Props) => {
  const textStyle = [style, styles.regular];

  if (bold) {
    textStyle.push(styles.bold);
  }

  if (black) {
    textStyle.push(styles.black);
  }

  if (header) {
    textStyle.push(styles.header);
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
    color: COLORS.text.primary,
  },
  bold: {
    fontFamily: 'HankRnd-Bold ',
  },
  black: {
    fontFamily: 'HankRnd-Black',
  },
  header: {
    fontSize: 24,
  },
});

export default memo(AppText);
