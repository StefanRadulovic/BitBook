import React from 'react';
<<<<<<< HEAD
// import feedService from '../../services/feedService';
=======
import infiniteFeedService from '../../services/feedService';
>>>>>>> infiniti scroll started
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';
<<<<<<< HEAD
import infiniteScrollFeedService from '../../services/infiniteScrollFeedService';
=======
import InfiniteScroll from 'react-infinite-scroller'
>>>>>>> infiniti scroll started

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            posts: null
        }
        this.scroll = React.createRef()
=======
            hasMoreItems: true,
            posts: null
        }
>>>>>>> infiniti scroll started
    }

    loadPosts = () => {

<<<<<<< HEAD
        infiniteScrollFeedService.getPosts(1).then(data => {


            this.setState({
                posts: data
            });

        });
    }
    onScrollHandler = (event) => {
        // console.log(event.view.innerHeight);
        console.log(event);


    }
    componentDidMount() {

        this.loadPosts();
    }

    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
                <FeedContent posts={this.state.posts} refreshFeed={this.loadPosts} />
=======
        infiniteFeedService.getPosts().then(data => {
            if(data.length!==this.state.length){
            this.setState({
                posts: data
            });
        }else{
            this.setState({
                hasMoreItems: false
            });
        }
        });
    }

    componentDidMount() {
        this.loadPosts();
    }
    
    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
          
                <FeedContent posts={this.state.posts} hasMore={this.state.hasMoreItems} reshFeed={this.loadPosts} />

                
>>>>>>> infiniti scroll started
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}