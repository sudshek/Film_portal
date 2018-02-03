import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home.js';

ReactDOM.render(

    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );