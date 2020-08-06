import { createSlice } from '@reduxjs/toolkit';
import { takeRight } from 'lodash';

function sameDay(d1, d2) {
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
      {
        date: new Date().toISOString(),
        score: 1,
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

export const selectDays = (state) => state.days;

export const selectLastWeekScore = (state) =>
  takeRight(state.days, 7).map((day) => day.score);

export const {
  setGlobalScore,
  decrement,
  incrementByAmount,
} = timeDataSlice.actions;

export default timeDataSlice.reducer;
