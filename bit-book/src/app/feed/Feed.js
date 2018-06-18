import React from 'react';
// import feedService from '../../services/feedService';
import { LoadingScreen } from '../partials/LoadingScreen';
// import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';
import { FeedContent } from './FeedContentPagination';
import paginationFeedService from '../../services/paginationFeedService';



export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            pagPosts: [],
            pageSkip: 0
        }
    }

    loadPostsNumber = () => {

        paginationFeedService.getPostsNumber().then(data => {
            this.setState({
                posts: data
            });

        });
    }
    loadPagPosts = (page) => {
        if (page === undefined) {
            page = this.state.pageSkip
        }
        paginationFeedService.getPaginationPosts(page).then(pagPosts => {

            this.setState({
                pagPosts
            })
        })
    }
    componentDidMount() {
        this.loadPostsNumber();
        const page = this.props.match.params.pageNumber - 1;
        this.setState({
            pageSkip: page
        });
        this.loadPagPosts(page);
    }
    componentWillReceiveProps(nextProps) {

        const page = nextProps.match.params.pageNumber - 1
        this.setState({
            pageSkip: page
        })

        this.loadPagPosts(page)

    }
    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
                <FeedContent posts={this.state.posts} refreshFeed={this.loadPosts} pagPosts={this.state.pagPosts} page={this.state.pageSkip} />
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPagPosts} />
            </div>
        );
    }
}