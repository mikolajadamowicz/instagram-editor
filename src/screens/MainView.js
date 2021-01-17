import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chart from '../components/LineChart';
import AppText from '../components/AppText';
import {
  setGlobalScore,
  selectLast7DaysScore,
} from '../reducers/timeDataSlice';
import { last } from 'lodash';

export default function MainView() {
  const timeData = useSelector(selectLast7DaysScore);
  // const timeData = { labels: ['Mon'], scores: [1] };
  const dispatch = useDispatch();
  const [score, setScore] = useState(0);

  const setClicked = () => {
    dispatch(setGlobalScore({ score, today: new Date().toISOString() }));
    setScore(0);
  };

  const lastScore = last(timeData?.scores);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <AppText>Last 7 days</AppText>
        <Chart dataset={timeData.scores} labels={timeData.labels} />
        <View style={styles.buttons}>
          <Button onPress={() => setScore(score + 1)} title="+1" />
          <AppText style={styles.score}>{score}</AppText>
          <Button onPress={() => setScore(score - 1)} title="-1" />
        </View>
        <Button onPress={setClicked} title="Set" />
        <AppText
          style={styles.score}>{`Your overall score is ${lastScore}`}</AppText>
        <AppText style={styles.score}>
          {`Your today's score is ${timeData.scoreToday}`}
        </AppText>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: { alignItems: 'center' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  score: {
    margin: '10%',
    alignSelf: 'center',
  },
  backdrop: {
    backgroundColor: '#fff',
  },
});
