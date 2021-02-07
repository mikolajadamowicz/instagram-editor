import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import {
  selectLast90DaysScore,
  selectLast30DaysScore,
  selectLast14DaysScore,
} from '../../reducers/timeDataSlice';
import useCardFlipOnScroll from '../../hooks/useCardFlipOnScroll';
import Statistics from './Statistics';

const StatisticsScreen: React.FC = () => {
  const Last14days = useSelector(selectLast14DaysScore);
  const Last30days = useSelector(selectLast30DaysScore);
  const Last90days = useSelector(selectLast90DaysScore);
  const insets = useSafeArea();

  const [onScrollEvent, animatedViewStyle] = useCardFlipOnScroll();

  const props = {
    Last14days,
    Last30days,
    Last90days,
    insets,
    onScrollEvent,
    animatedViewStyle,
  };

  return <Statistics {...props} />;
};

export default StatisticsScreen;
