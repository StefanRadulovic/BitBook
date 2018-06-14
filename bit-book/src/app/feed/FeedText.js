import React from 'react';
import feedService from '../../services/feedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FilterText } from './FilterText';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';

export default class FeedText extends React.Component {
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
                <FilterText posts={this.state.posts} />
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}