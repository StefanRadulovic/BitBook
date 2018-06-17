import React from 'react';
// import feedService from '../../services/feedService';;
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';
import infiniteScrollFeedService from '../../services/infiniteScrollFeedService';


export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
        this.scroll = React.createRef()
    }

    loadPosts = () => {


        infiniteScrollFeedService.getPosts(1).then(data => {


            this.setState({
                posts: data
            });

        });
    }
    onScrollHandler = (event) => {


    }
    componentDidMount() {

        this.loadPosts();
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