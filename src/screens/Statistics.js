import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chart from '../components/LineChart';
import { verticalScale } from 'react-native-size-matters';
import AppText from '../components/AppText';

const Statistics = () => {
  return (
    <ScrollView style={styles.scroll}>
      <AppText>Monthly chart</AppText>
      <Chart height={verticalScale(290)} />
      <AppText>3 months time chart</AppText>
      <Chart height={verticalScale(290)} />
      <AppText>5 months time chart</AppText>
      <Chart height={verticalScale(290)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: { flex: 1 },
});

export default Statistics;
