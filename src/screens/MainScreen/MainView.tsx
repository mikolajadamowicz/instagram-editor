import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import Chart from '../../components/LineChart';
import AppText from '../../components/AppText';
import { LastDays } from '../../reducers/timeDataSlice';
import styles from './styles';
import ScaleIcon from '../../components/ScaleIcon';
import Headline from '../../components/Headline';

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
  <ScrollView style={styles.root} contentContainerStyle={styles.scrollView}>
    <Headline style={styles.header}>Last 7 days</Headline>
    <Chart dataset={timeData.scores} labels={timeData.labels} />
    <AppText
      style={styles.desc}>{`Your overall score is ${lastScore}`}</AppText>
    <AppText style={styles.desc}>
      {`Your today's score is ${timeData.scoreToday}`}
    </AppText>
    <AppText style={styles.score}>{score}</AppText>
    <View style={styles.buttons}>
      <ScaleIcon onPress={() => setScore(score - 1)} name="minus" />
      <ScaleIcon onPress={() => setScore(score + 1)} name="plus" />
    </View>
    <Button onPress={setClicked} title="Set" />
  </ScrollView>
);

export default MainView;
