import React from 'react';
import { Router, Route } from "react-router-dom";
import history from './history';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './components/login/login.component';
import Register from './components/register/register.component';
import ForgotPass from './components/forgotPass/forgotPass.component';
import SetPass from './components/setPass/setPass.component';
import Home from './components/home/home.component';
import { loginReducer } from './reducer/login-reducer';
import { sessionReducer } from './reducer/session-reducer';
import { Provider } from 'react-redux'; 
import { createStore, combineReducers } from 'redux';
import './App.scss';

const reducers = combineReducers({
  login: loginReducer,
  session: sessionReducer
});

const store = createStore(reducers);

function App() {
  return (
    <Provider store = {store}>
      <Router history={history}>
        <div className="container">
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/forgot_pass" component={ForgotPass} />
          <Route path="/set_pass/:token" component={SetPass} />

          <Route path="/home" component={Home} />
        </div>
      </Router>
    </Provider>
  )
}

export default App;
