import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import DashboardContainer from './containers/dashboardContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <DashboardContainer />
    </Provider>
  );
}

export default App;
