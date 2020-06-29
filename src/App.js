import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import MainRouter from './components/MainRouter';
import authReducer from './store/reducers/authReducers';
import modalReducer from './store/reducers/modalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modals: modalReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
