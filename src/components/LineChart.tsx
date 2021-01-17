import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

type Props = {
  dataset: number[];
  height?: number;
  labels: string[];
};

const Chart: React.FC<Props> = React.forwardRef(
  ({ dataset, height = 330, labels, ...props }, ref) => {
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
        width={Dimensions.get('window').width - scale(30)}
        height={height}
        withDots={false}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
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

export default Chart;
