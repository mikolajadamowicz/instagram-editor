import React, { useMemo, useRef } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';
import Animated, {
  diffClamp,
  interpolate,
  event,
  multiply,
  Value,
  useValue,
  concat,
  Extrapolate,
  divide,
  sub,
  sin,
  abs,
} from 'react-native-reanimated';

import Chart from '../components/LineChart';
import AppText from '../components/AppText';

import {
  selectLast90DaysScore,
  selectLast30DaysScore,
  selectLast14DaysScore,
} from '../reducers/timeDataSlice';
import ChartNotReady from '../components/ChartNotReady';

// const AnimatedChart = Animated.createAnimatedComponent(Chart);
// const AnimatedAppText = Animated.createAnimatedComponent(AppText);
type Val = typeof Value | number;

export const toRad = (deg: Val): Val => multiply(deg, Math.PI / 180);
export const toDeg = (rad: Val): Val => multiply(rad, 180 / Math.PI);
export const translateZ = (perspective: Val, x: Val) =>
  divide(perspective, sub(perspective, x));

const Statistics = () => {
  const scrollY = useValue(0);
  const animatedTitleOpacity = useRef(
    interpolate(scrollY, {
      inputRange: [0, 260],
      outputRange: [1, 0],
    })
  );

  const animatedRotateX = useRef(
    concat(
      interpolate(scrollY, {
        inputRange: [0, 290],
        outputRange: [0, -90],
        extrapolate: Extrapolate.CLAMP,
      }),
      'deg'
    )
  );
  const animatedTitleOpacity2 = useRef(
    interpolate(scrollY, {
      inputRange: [400, 560],
      outputRange: [1, 0],
    })
  );

  const animatedRotateX2 = useRef(
    concat(
      interpolate(scrollY, {
        inputRange: [400, 590],
        outputRange: [0, -90],
        extrapolate: Extrapolate.CLAMP,
      }),
      'deg'
    )
  );

  // const opacity = interpolate(scale, {
  //   inputRange,
  //   outputRange: [isOnTop ? 0.6 : 0.5, 0],
  //   extrapolate: Extrapolate.CLAMP,
  // });

  const x = multiply(
    -verticalScale(290) / 2,
    sin(toRad(abs(animatedRotateX.current)))
  );
  const x2 = multiply(
    -verticalScale(290) / 2,
    sin(toRad(abs(animatedRotateX2.current)))
  );
  // { transform: [{ rotateX: animatedRotateX }] },

  //TODO: przekrecanie ttakie jak w Actions tot bedzie {transform: [{ rotateX: '90deg' }]}

  const Last14days = useSelector(selectLast14DaysScore);
  const Last30days = useSelector(selectLast30DaysScore);
  const Last90days = useSelector(selectLast90DaysScore);
  const insets = useSafeArea();
  const containerStyle = useMemo(
    () => [styles.container, { paddingBottom: insets.bottom }],
    [insets.bottom]
  );
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      onScroll={event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
      style={styles.scroll}>
      <View style={containerStyle}>
        <Animated.View
          style={[
            { opacity: animatedTitleOpacity.current },
            {
              transform: [
                { perspective: 600 },
                { rotateX: animatedRotateX.current },
                { scale: translateZ(600, x) },
              ],
            },
          ]}>
          <AppText>Last Month</AppText>
          <Chart
            dataset={Last14days.scores}
            labels={['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']}
            height={verticalScale(290)}
          />
        </Animated.View>
        {/* <Animated.View
          style={[
            { opacity: animatedTitleOpacity2.current },
            {
              transform: [
                { perspective: 600 },
                { rotateX: animatedRotateX2.current },
                { scale: translateZ(600, x2) },
              ],
            },
          ]}>
          <AppText>Last Month</AppText>
          <ChartNotReady style={styles.notReady} />
        </Animated.View> */}
        <ChartNotReady style={styles.notReady} />

        <AppText>Last 3 months</AppText>
        <Chart
          dataset={Last90days.scores}
          labels={['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']}
          height={verticalScale(290)}
        />
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: {
    marginTop: '10%',
    alignItems: 'center',
  },
  notReady: { height: verticalScale(290) },
});

export default Statistics;
