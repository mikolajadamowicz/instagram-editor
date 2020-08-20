import AsyncStorage from '@react-native-community/async-storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import timeDataReducer from './reducers/timeDataSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = persistReducer(persistConfig, timeDataReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
