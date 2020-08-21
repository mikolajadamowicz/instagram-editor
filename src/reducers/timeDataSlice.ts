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

export const selectDays = (state: State) => state.days;

export const selectLastWeekScore = (state: State) => {
  const lastWeek = takeRight(state.days, 7);
  return {
    scores: lastWeek.map((day: { score: number }) => day.score),
    labels: lastWeek.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
    ),
  };
};

export const selectLastMonthScore = (state: State) => {
  const lastWeek = takeRight(state.days, 7);
  return {
    scores: lastWeek.map((day: { score: number }) => day.score),
    labels: lastWeek.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
    ),
  };
};

export const select3MonthScore = (state: State) => {
  const lastWeek = takeRight(state.days, 7);
  return {
    scores: lastWeek.map((day: { score: number }) => day.score),
    labels: lastWeek.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
    ),
  };
};

export const select6MonthsScore = (state: State) => {
  const lastWeek = takeRight(state.days, 7);
  return {
    scores: lastWeek.map((day: { score: number }) => day.score),
    labels: lastWeek.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
    ),
  };
};

export const { setGlobalScore } = timeDataSlice.actions;

export default timeDataSlice.reducer;
