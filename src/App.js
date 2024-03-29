import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import {Login} from './login/login'
import { AddClient } from './add-client/add-client';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/add-client" component={AddClient} />        
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
