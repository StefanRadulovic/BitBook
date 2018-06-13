import React from 'react';
import feedService from '../../services/feedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FeedSideBar } from './FeedSideBar';

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
                <FeedContent posts={this.state.posts} />
                <FeedSideBar />
            </div>
        );
    }
}