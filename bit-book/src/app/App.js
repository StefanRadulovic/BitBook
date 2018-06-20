import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import MyProfilePage from './myProfile/MyProfilePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import PeoplePage from './People/PeoplePage'
import FeedText from './feed/FeedText';
import FeedImages from './feed/FeedImages';
import FeedVideos from './feed/FeedVideos';
import SingleFeedItem from './singleFeedItem/SingleFeedItem';
import WelcomePage from './welcome/WelcomePage';
import { WelcomeHeader } from './welcome/WelcomeHeader';
import Feed from './feed/Feed';
// import Feed from './feed/FeedPagination'
// import Feed from './feed/InfiniteScroll';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

  }

  componentDidMount() {
    const local = localStorage.getItem('logIn');
    if (local) {
      this.logInLogOut(true);
    }
  }

  logInLogOut = (isLoggedIn) => {
    this.setState({
      isLoggedIn: isLoggedIn
    })
  }

  render() {

    return (
      <div id="bit-book">
        {(this.state.isLoggedIn) ? (
          <Fragment>
            <Header logInLogOut={this.logInLogOut} />
            <div id="page-content">
              <Switch>
                <Route exact path="/home/:pageNumber" component={Feed} />
                <Route exact path='/people' component={PeoplePage} />
                <Route path='/people/:id' component={MyProfilePage} />
                <Route path='/profile' component={MyProfilePage} />
                <Route path="/text" component={FeedText} />
                <Route path="/images" component={FeedImages} />
                <Route path="/videos" component={FeedVideos} />
                <Route path={"/post/:type/:id"} component={SingleFeedItem} />
                <Redirect from='/posts' to='/home' />
                <Redirect from='/' to='/home/1' />
              </Switch>
            </div>
          </Fragment>
        ) : (
            <Fragment>
              <WelcomeHeader />
              <Switch>
                <Route path='/' render={() => <WelcomePage logInLogOut={this.logInLogOut} />} />
              </Switch>
            </Fragment>
          )}
        <Footer />
      </div >
    );
  }
}

export default App;