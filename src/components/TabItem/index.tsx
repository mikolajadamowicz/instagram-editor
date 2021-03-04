import React from 'react';
import Animated from 'react-native-reanimated';
import TouchableScale from '@jonny/touchable-scale';
import { styles } from './styles';
import { View } from 'react-native';
import { TabViewProps } from 'react-native-tab-view';
import { BUTTON_SCALE, COLORS } from '../../constants';

const TabItem: React.FC = ({
  descriptors,
  route,
  index,
  state,
  navigation,
  position,
  ...props
}: TabViewProps) => {
  const { options } = descriptors[route.key];

  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const inputRange = state.routes.map((_, i: number) => i);

  const width = Animated.interpolate(position, {
    inputRange,
    outputRange: inputRange.map((i: number) => (i === index ? 120 : 0)),
  });

  // TODO: when changing tabs js thread drops by 3 frames because of this interpolation
  const color = Animated.interpolateColors(position, {
    inputRange,
    outputColorRange: inputRange.map((i: number) =>
      i === index ? COLORS.primary : COLORS.text
    ),
  });

  return (
    <View style={styles.root}>
      <TouchableScale
        activeScale={BUTTON_SCALE}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        {...props}>
        <Animated.Text style={[styles.text, { color }]}>{label}</Animated.Text>
      </TouchableScale>
      <Animated.View style={[styles.underline, { width }]} />
    </View>
  );
};

export default TabItem;
