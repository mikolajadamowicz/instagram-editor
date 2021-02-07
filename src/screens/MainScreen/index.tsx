import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGlobalScore,
  selectLast7DaysScore,
} from '../../reducers/timeDataSlice';
import { last } from 'lodash';
import MainView from './MainView';

const MainScreen: React.FC = () => {
  const timeData = useSelector(selectLast7DaysScore);
  const lastScore = last(timeData?.scores);

  const dispatch = useDispatch();
  const [score, setScore] = useState(0);

  const setClicked = () => {
    dispatch(setGlobalScore({ score, today: new Date().toISOString() }));
    setScore(0);
  };

  const props = {
    timeData,
    setScore,
    score,
    setClicked,
    lastScore,
  };

  return <MainView {...props} />;
};

export default MainScreen;
