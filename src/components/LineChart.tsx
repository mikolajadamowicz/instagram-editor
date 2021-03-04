import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import useDimensions from '../hooks/useDimensions';
import { COLORS } from '../constants';

type Props = {
  dataset: number[];
  height?: number;
  labels: string[];
};

const Chart: React.FC<Props> = React.forwardRef(
  ({ dataset, height = 330, labels, ...props }, ref) => {
    const { width } = useDimensions();
    return (
      <LineChart
        ref={ref}
        data={{
          labels,
          datasets: [
            {
              data: dataset,
            },
            {
              data: new Array(dataset?.length).fill(0),
            },
          ],
        }}
        withInnerLines={false}
        withOuterLines={false}
        width={width - scale(45)}
        height={height}
        withDots={false}
        chartConfig={{
          backgroundColor: COLORS.primary3,
          backgroundGradientFrom: COLORS.primary2,
          backgroundGradientTo: COLORS.primary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLORS.primary,
          },
        }}
        bezier
        style={styles.chart}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default React.memo(Chart);
