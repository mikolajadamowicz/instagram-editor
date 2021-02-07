import React from 'react';
import Chart from '../components/LineChart';
import { StyleSheet, View, ViewStyle } from 'react-native';
import AppText from './AppText';
import Animated from 'react-native-reanimated';
import ChartNotReady from './ChartNotReady';
import { CHART_HEIGHT } from '../constants';

type Props = {
  dataset: number[];
  title: string;
  height?: number;
  animated?: boolean;
  viewStyle?: ViewStyle;
};

const TitleChart: React.FC<Props> = ({
  animated = false,
  viewStyle,
  dataset,
  height,
  title,
  ...props
}: Props) => {
  const Container = animated ? Animated.View : View;

  return (
    <Container style={viewStyle} {...props}>
      <AppText>{title}</AppText>
      {dataset.length > 30 ? (
        <ChartNotReady style={styles.notReady} />
      ) : (
        <Chart
          dataset={dataset}
          labels={['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']}
          height={height || CHART_HEIGHT}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: {
    marginTop: '10%',
    alignItems: 'center',
  },
  notReady: { height: CHART_HEIGHT },
});

export default TitleChart;
