import { useMemo } from 'react';
import { toRad, translateZ } from 'react-native-redash/lib/module/v1';
import { verticalScale } from 'react-native-size-matters';
import Animated, {
  interpolate,
  event,
  multiply,
  useValue,
  concat,
  Extrapolate,
  sin,
  abs,
} from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { CHART_HEIGHT } from '../constants';

const HEIGHT = CHART_HEIGHT + 40;
const OPACITY = HEIGHT - 50;

const useCardFlipOnScroll = (): [
  (...args: any[]) => void,
  Animated.AnimateStyle<ViewStyle[]>
] => {
  const scrollY = useValue(0);
  const opacity = interpolate(scrollY, {
    inputRange: [0, OPACITY],
    outputRange: [1, 0],
  });
  const rotateX = concat(
    interpolate(scrollY, {
      inputRange: [0, HEIGHT],
      outputRange: [0, -140],
      extrapolate: Extrapolate.CLAMP,
    }),
    'deg'
  );

  const x = multiply(-HEIGHT / 2, sin(toRad(abs(rotateX))));

  const animatedViewStyle = useMemo(
    () => [
      { opacity },
      {
        transform: [
          { perspective: 600 },
          { rotateX: rotateX },
          translateZ(600, x),
        ],
      },
    ],
    [x, opacity, rotateX]
  );

  const onScrollEvent = event([
    {
      nativeEvent: {
        contentOffset: {
          y: scrollY,
        },
      },
    },
  ]);

  return [onScrollEvent, animatedViewStyle];
};

export default useCardFlipOnScroll;
