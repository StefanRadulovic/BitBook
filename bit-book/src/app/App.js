import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="bit-book">
        <Header />
        <Switch>

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
