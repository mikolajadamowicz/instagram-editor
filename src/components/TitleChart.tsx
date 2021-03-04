import React from 'react';
import Chart from '../components/LineChart';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import ChartNotReady from './ChartNotReady';
import { CHART_HEIGHT } from '../constants';
import Headline from './Headline';

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
      <Headline style={styles.header}>{title}</Headline>
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
  header: {
    margin: '2%',
  },
});

export default TitleChart;
