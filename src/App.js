import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import paymentApp from './reducers';
import PaymentCreator from "./components/PaymentCreator";
import './App.css';

const store = createStore(
  paymentApp,
  applyMiddleware(logger, thunk),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PaymentCreator />
        </div>
      </Provider>
    );
  }
}

export default App;
