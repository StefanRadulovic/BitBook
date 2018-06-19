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
            posts: null,

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

    componentWillReceiveProps(nextProps) {
        let pageUnm = nextProps.match.params.pageNumber - 1
        let page;
        if (pageUnm > this.state.posts / 5) {
            page = 0
        } else {
            page = pageUnm
        }
        this.setState({
            pageSkip: page
        })

        this.loadPagPosts(page)

    }

    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
                <FeedContent posts={this.state.posts} refreshFeed={this.loadPosts} pagPosts={this.state.pagPosts} />
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}