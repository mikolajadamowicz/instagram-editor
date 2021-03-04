import React from 'react';
import TouchableScale, { TouchableScaleProps } from '@jonny/touchable-scale';
import Icon from 'react-native-vector-icons/AntDesign';
import { BUTTON_SCALE, COLORS } from '../constants';

type Props = {
  size?: number;
  color: string;
  name: string;
} & TouchableScaleProps;

const ScaleIcon: React.FC<Props> = ({
  size = 30,
  color = COLORS.text.primary,
  name,
  ...props
}) => {
  return (
    <TouchableScale activeScale={BUTTON_SCALE} {...props}>
      <Icon name={name} size={size} color={color} />
    </TouchableScale>
  );
};

export default ScaleIcon;
