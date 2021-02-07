import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chart from '@components/LineChart';
import AppText from '@components/AppText';
import { LastDays } from '../../reducers/timeDataSlice';
import styles from './styles';

type Props = {
  timeData: LastDays;
  setScore: (score: number) => void;
  score: number;
  setClicked: () => void;
  lastScore: LastDays['scoreToday'];
};

const MainView: React.FC<Props> = ({
  timeData,
  setScore,
  score,
  setClicked,
  lastScore,
}) => (
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

export default MainView;
