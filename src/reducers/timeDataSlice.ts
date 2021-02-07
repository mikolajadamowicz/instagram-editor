import { createSlice } from '@reduxjs/toolkit';
import { takeRight, last } from 'lodash';
import moment from 'moment';

type Day = {
  date: string;
  score: number;
  scoreToday: number;
};

export type LastDays = {
  scores: number[];
  labels: string[];
  scoreToday: number | undefined;
};

type State = {
  days: Day[];
};

function sameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export const timeDataSlice = createSlice({
  name: 'timeData',
  initialState: {
    days: [
      {
        date: moment().subtract(1, 'days').toISOString(),
        score: 0,
        scoreToday: 0,
      },
      {
        date: moment().toISOString(),
        score: 0,
        scoreToday: 0,
      },
    ],
  },
  reducers: {
    setGlobalScore: (state, action) => {
      const { today, score } = action.payload;
      const lastDay = state.days[state.days.length - 1];
      const updatedScore = lastDay.score + score;

      //TODO: update this later, this expression is here only so that it won't break my own app
      const updatedScoreToday = lastDay.scoreToday
        ? lastDay.scoreToday + score
        : score;

      if (sameDay(new Date(lastDay.date), new Date(today))) {
        lastDay.score = updatedScore;
        lastDay.scoreToday = updatedScoreToday;
      } else {
        state.days.push({
          date: new Date().toISOString(),
          score: updatedScore,
          scoreToday: score,
        });
      }
    },
  },
});

// Selectors
const selectAllDays = (state: State): Day[] => state.days;

const selectLastDays = (state: State, days = 0): LastDays => {
  const selected = takeRight(state.days, days);
  return {
    scores: selected.map((day: { score: number }) => day.score),
    labels: selected.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      })
    ),
    scoreToday: last(selected)?.scoreToday,
  };
};

const selectLast7DaysScore = (state: State): LastDays =>
  selectLastDays(state, 7);

const selectLast14DaysScore = (state: State): LastDays =>
  selectLastDays(state, 14);

const selectLast30DaysScore = (state: State): LastDays =>
  selectLastDays(state, 30);

const selectLast90DaysScore = (state: State): LastDays =>
  selectLastDays(state, 90);

export const { setGlobalScore } = timeDataSlice.actions;

export {
  selectAllDays,
  selectLastDays,
  selectLast7DaysScore,
  selectLast14DaysScore,
  selectLast30DaysScore,
  selectLast90DaysScore,
};
export default timeDataSlice.reducer;
