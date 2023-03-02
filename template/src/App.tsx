import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@stores/index';
import MainNavigation from '@navigation/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
