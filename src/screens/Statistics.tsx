import React, { useMemo } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Chart from '../components/LineChart';
import { verticalScale } from 'react-native-size-matters';
import AppText from '../components/AppText';
import { useSafeArea } from 'react-native-safe-area-context';

const Statistics = () => {
  const insets = useSafeArea();
  const containerStyle = useMemo(
    () => [styles.container, { paddingBottom: insets.bottom }],
    [insets.bottom],
  );
  return (
    <ScrollView style={styles.scroll}>
      <View style={containerStyle}>
        <AppText>Monthly chart</AppText>
        <Chart height={verticalScale(290)} />
        <AppText>3 months time chart</AppText>
        <Chart height={verticalScale(290)} />
        <AppText>5 months time chart</AppText>
        <Chart height={verticalScale(290)} />
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
});

export default Statistics;
