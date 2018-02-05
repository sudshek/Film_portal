import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home.js';
import LoginForm from './components/login.js';
import RegisterForm from './components/register.js';

ReactDOM.render(

    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login/" component={LoginForm}/>
          <Route exact path="/register/" component={RegisterForm}/>

    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );