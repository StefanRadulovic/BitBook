import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
<<<<<<< HEAD
import { Footer } from './partials/Footer';
import Feed from './feed/Feed';
import { Switch, Route, Redirect } from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom'
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
import PeoplePage from '../People/PeoplePage'


class App extends Component {
  render() {
    return (
      <div id="bit-book">
        <Header />
<<<<<<< HEAD
        <div id="page-content">
          <Switch>
            <Route path="/home" component={Feed} />
            <Route path='/people' component={PeoplePage} />
          </Switch>
        </div>
        <Footer />
=======
        <Switch>
          <Route path='/people' component={PeoplePage}/>
        </Switch>
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e

      </div>
    );
  }
}

export default App;
