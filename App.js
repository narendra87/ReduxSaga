// Imports: Dependencies
import React from 'react';
import {Provider} from 'react-redux'
import Counter from './src/screens/Counter';
import {store} from './src/store/ReduxStore';

// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}