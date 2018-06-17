import React from 'react';
// import feedService from '../../services/feedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';
import InfiniteScroll from 'react-infinite-scroller';
import infiniteScrollFeedService from '../../services/infiniteScrollFeedService';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMoreItems: true,
            posts: null
        }
    }

    loadPosts = () => {

        infiniteScrollFeedService.getPosts().then(data => {
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

                
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}