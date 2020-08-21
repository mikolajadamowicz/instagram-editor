import { createSlice } from '@reduxjs/toolkit';
import { takeRight } from 'lodash';

type State = {
  days: {
    date: string;
    score: number;
  }[];
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
        date: new Date().toISOString(),
        score: 0,
      },
    ],
  },
  reducers: {
    setGlobalScore: (state, action) => {
      const { today, score } = action.payload;
      const lastDay = state.days[state.days.length - 1];
      const updatedScore = lastDay.score + score;

      if (sameDay(new Date(lastDay.date), new Date(today))) {
        lastDay.score = updatedScore;
      } else {
        state.days.push({
          date: new Date().toISOString(),
          score: updatedScore,
        });
      }
    },
  },
});

// Selectors
const selectAllDays = (state: State) => state.days;

const selectLastDays = (state: State, days: number = 0) => {
  const selected = takeRight(state.days, days);
  return {
    scores: selected.map((day: { score: number }) => day.score),
    labels: selected.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
    ),
  };
};

const selectLast7DaysScore = (state: State) => selectLastDays(state, 7);

const selectLast14DaysScore = (state: State) => selectLastDays(state, 14);

const selectLast30DaysScore = (state: State) => selectLastDays(state, 30);

const selectLast90DaysScore = (state: State) => selectLastDays(state, 90);

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
