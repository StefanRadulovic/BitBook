import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import Feed from './feed/Feed';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeedText from './feed/FeedText';
import FeedImages from './feed/FeedImages';
import FeedVideos from './feed/FeedVideos';
import SingleFeedItem from './singleFeedItem/SingleFeedItem';


class App extends Component {
  render() {
    return (
      <div id="bit-book">
        <Header />
        <div id="page-content">
          <Switch>
            <Route path="/home" component={Feed} />
            <Route path="/text" component={FeedText} />
            <Route path="/images" component={FeedImages} />
            <Route path="/videos" component={FeedVideos} />
            <Route path={"/post/:type/:id"} component={SingleFeedItem} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
