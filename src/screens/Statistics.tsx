import React, { useMemo } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Chart from '../components/LineChart';
import { verticalScale } from 'react-native-size-matters';
import AppText from '../components/AppText';
import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import {
  selectLast90DaysScore,
  selectLast30DaysScore,
  selectLast14DaysScore,
} from '../reducers/timeDataSlice';
import ChartNotReady from '../components/ChartNotReady';

const Statistics = () => {
  const Last14days = useSelector(selectLast14DaysScore);
  const Last30days = useSelector(selectLast30DaysScore);
  const Last90days = useSelector(selectLast90DaysScore);
  const insets = useSafeArea();
  const containerStyle = useMemo(
    () => [styles.container, { paddingBottom: insets.bottom }],
    [insets.bottom]
  );
  return (
    <ScrollView style={styles.scroll}>
      <View style={containerStyle}>
        <AppText>Last 14 days</AppText>
        <Chart
          dataset={Last14days.scores}
          labels={['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']}
          height={verticalScale(290)}
        />
        <AppText>Last Month</AppText>
        <ChartNotReady style={styles.notReady} />
        <AppText>Last 3 months</AppText>
        <Chart
          dataset={Last90days.scores}
          labels={['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']}
          height={verticalScale(290)}
        />
      </View>
    </ScrollView>
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
