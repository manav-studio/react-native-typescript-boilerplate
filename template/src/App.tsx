import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@stores/index';
import MainNavigation from '@navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
