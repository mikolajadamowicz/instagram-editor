import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chart from '../components/LineChart';
import AppText from '../components/AppText';
import { setGlobalScore, selectLastWeekScore } from '../reducers/timeDataSlice';

export default function MainView() {
  const timeData = useSelector(selectLastWeekScore);
  const dispatch = useDispatch();
  const [score, setScore] = useState(0);

  const setClicked = () => {
    dispatch(setGlobalScore({ score, today: new Date().toISOString() }));
    setScore(0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Chart dataset={timeData.scores} labels={timeData.labels} />
      <View style={styles.buttons}>
        <Button onPress={() => setScore(score + 1)} title="+1" />
        <Button onPress={() => setScore(score - 1)} title="-1" />
      </View>
      <AppText style={styles.score}>{score}</AppText>
      <Button onPress={setClicked} title="Set" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
