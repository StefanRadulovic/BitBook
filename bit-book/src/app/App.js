import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import Feed from './feed/Feed';
import MyProfilePage from './myProfile/MyProfilePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import PeoplePage from '../People/PeoplePage'
import FeedText from './feed/FeedText';
import FeedImages from './feed/FeedImages';
import FeedVideos from './feed/FeedVideos';
import SingleFeedItem from './singleFeedItem/SingleFeedItem';
import WelcomePage from './welcome/WelcomePage'


class App extends Component {
  render() {
    return (
      <div id="bit-book">
        <Header />
        <div id="page-content">
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path="/home" component={Feed} />
            <Route exact path='/people' component={PeoplePage} />
            <Route path='/people/:id' component={MyProfilePage} />
            <Route path='/profile' component={MyProfilePage} />
            <Route path="/text" component={FeedText} />
            <Route path="/images" component={FeedImages} />
            <Route path="/videos" component={FeedVideos} />
            <Route path={"/post/:type/:id"} component={SingleFeedItem} />
            <Redirect from="/posts" to="/home" />
          </Switch>
        </div>
        <Footer />

      </div >
    );
  }
}

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loggedIn: false
//     }
//   }

//   render() {
//     return (
//       <div id="bit-book">
//         {this.state.loggedIn ? (
//           <div>
//             <Header />
//             <div id="page-content">
//               <Switch>
//                 <Route path="/home" component={Feed} />
//                 <Route path='/people' component={PeoplePage} />
//                 <Route path='/profile' component={MyProfilePage} />
//                 <Route path="/text" component={FeedText} />
//                 <Route path="/images" component={FeedImages} />
//                 <Route path="/videos" component={FeedVideos} />
//                 <Route path={"/post/:type/:id"} component={SingleFeedItem} />
//               </Switch>
//             </div>
//           </div>
//         ) : (
//             <Switch>
//               <Route path='/' component={WelcomePage} />
//             </Switch>
//           )}
//         <Footer />
//       </div >
//     );
//   }
// }
