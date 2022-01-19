import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
