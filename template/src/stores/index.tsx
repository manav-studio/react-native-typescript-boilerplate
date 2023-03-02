import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reduxStorage } from '@stores/mmkvHelper';

import userReducer from '@stores/user.reducer';
import { Platform } from 'react-native';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import onboardingReducer from '@stores/onboarding.reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: __DEV__
    ? AsyncStorage
    : Platform.select({ ios: reduxStorage, android: AsyncStorage }),
};
const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  user: userReducer,
});

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
