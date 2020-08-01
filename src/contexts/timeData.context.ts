import React from 'react';

const activityType = {
  PLUS: 'plus',
  MINUS: 'minus',
};

const mockData = [
  {
    date: new Date(),
    activities: [{ id: '132', desc: 'ssfsdfs', type: activityType.PLUS }],
    value: 1,
  },
];

// //https://fettblog.eu/typescript-react/context/
const timeDataContext = React.createContext(mockData);
timeDataContext.displayName = 'timeDataContext';

const timeDataConsumer = timeDataContext.Consumer;
const timeDataProvider = timeDataContext.Provider;

export { timeDataConsumer, timeDataProvider, timeDataContext };

//i need computed values
// i need async saving and readign persitence

// const cos = [
//   {
//     date: new Date(),
//     activities: [{id: '132', desc: 'ssfsdfs', type: 'plus'}],
//     value: 1,
//   },
// ]

// {
//   current: [{ date: new Date(), value: 0 }],
//   short: [{ date: new Date(), value: 0 }],
//   medium: [{ date: new Date(), value: 0 }],
//   long: [{ date: new Date(), value: 0 }],
// }
