import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import Feed from './feed/Feed';
import { Switch, Route, Redirect } from 'react-router-dom';
import PeoplePage from '../People/PeoplePage';
import LogInPage from './Log In/LogInPage'


class App extends Component {
  render() {
    return (
      <div id="bit-book">
        <Header />
        <div id="page-content">
          <Switch>
            <Route path="/home" component={Feed} />
            <Route path='/people' component={PeoplePage} />
            <Route path='/logIn' component={LogInPage} />
          </Switch>
        </div>
        <Footer />

      </div >
    );
  }
}

export default App;
