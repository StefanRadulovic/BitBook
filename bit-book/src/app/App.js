import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Switch, Route } from 'react-router-dom'
import PeoplePage from '../People/PeoplePage'


class App extends Component {
  render() {
    return (
      <div id="bit-book">
        <Header />
        <Switch>
          <Route path='/people' component={PeoplePage}/>
        </Switch>

      </div>
    );
  }
}

export default App;
