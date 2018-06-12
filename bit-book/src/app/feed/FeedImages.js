import React from 'react';
import feedService from '../../services/feedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedSideBar } from './FeedSideBar';
import { FilterImages } from './FilterImages';

export default class FeedImages extends React.Component {
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
                <FilterImages posts={this.state.posts} />
                <FeedSideBar />
            </div>
        );
    }
}