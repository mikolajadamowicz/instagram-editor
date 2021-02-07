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

const CHART_HEIGHT = verticalScale(330);
const OPACITY = CHART_HEIGHT - 100;

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
      inputRange: [0, CHART_HEIGHT],
      outputRange: [0, -90],
      extrapolate: Extrapolate.CLAMP,
    }),
    'deg'
  );

  const x = multiply(-CHART_HEIGHT / 2, sin(toRad(abs(rotateX))));

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
