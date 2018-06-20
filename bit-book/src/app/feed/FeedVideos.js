import React from 'react';
import postService from '../../services/postService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FilterVideos } from './FilterVideos';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';

export default class FeedVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
    }

    loadPosts = () => {

        postService.getPosts().then(data => {
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
                <FilterVideos posts={this.state.posts} />
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}