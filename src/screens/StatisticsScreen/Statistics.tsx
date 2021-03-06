import React, { FC, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { EdgeInsets } from 'react-native-safe-area-context';
import TitleChart from '../../components/TitleChart';
import { LastDays } from '../../reducers/timeDataSlice';
import styles from './styles';

type Props = {
  Last14days: LastDays;
  Last30days: LastDays;
  Last90days: LastDays;
  insets: EdgeInsets;
  onScrollEvent: (...args: any[]) => void;
  animatedViewStyle: Animated.AnimateStyle<ViewStyle[]>;
};

const Statistics: FC<Props> = ({
  Last14days,
  Last30days,
  Last90days,
  insets,
  onScrollEvent,
  animatedViewStyle,
}) => {
  const containerStyle = useMemo(
    () => [styles.container, { paddingBottom: insets.bottom }],
    [insets.bottom]
  );

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={onScrollEvent}
      style={styles.scroll}>
      <View style={containerStyle}>
        <TitleChart
          animated
          viewStyle={animatedViewStyle}
          dataset={Last14days.scores}
          title="Last 2 weeks"
        />
        <TitleChart dataset={Last30days.scores} title="Last month" />
        <TitleChart dataset={Last90days.scores} title="Last 3 months" />
      </View>
    </Animated.ScrollView>
  );
};

export default Statistics;
