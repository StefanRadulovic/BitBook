import React from 'react';
import feedService from '../../services/feedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
    }

    loadPosts = () => {

        feedService.getPosts().then(data => {
            this.setState({
                posts: data
            });
        });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
<<<<<<< HEAD
                <FeedContent posts={this.state.posts} refreshFeed={this.loadPosts} />
=======
                <FeedContent posts={this.state.posts} />
>>>>>>> Add new text post.
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}