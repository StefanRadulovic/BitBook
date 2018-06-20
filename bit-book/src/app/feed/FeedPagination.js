import React from 'react';
import postService from '../../services/postService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';
import { FeedContent } from './FeedContentPagination';





export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            pagPosts: [],
            pageSkip: 0,
            isOpen: false,
        }
    }

    loadPostsNumber = () => {

        postService.getPostsNumber().then(data => {
            this.setState({
                posts: data
            });

        });
    }
    loadPagPosts = (page) => {
        if (page === undefined) {
            page = this.state.pageSkip
        }
        postService.getPagPosts(page).then(pagPosts => {

            this.setState({
                pagPosts
            })
        })
    }
    componentDidMount() {
        this.loadPostsNumber();
        let page = this.props.match.params.pageNumber - 1
        if (page > this.state.posts / 5) {
            page = 0
        }
        this.setState({
            pageSkip: page
        });
        this.loadPagPosts(page);
    }
    componentWillReceiveProps(nextProps) {

        let page = nextProps.match.params.pageNumber - 1
        if (page > this.state.posts / 5) {
            page = 0
        }

        this.setState({
            pageSkip: page
        })

        this.loadPagPosts(page)

    }

    imgClickhandler = () => {
        console.log('HI')
    }
    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
                <FeedContent posts={this.state.posts} refreshFeed={this.loadPagPosts} pagPosts={this.state.pagPosts} page={this.state.pageSkip} imgClickhandler={this.imgClickhandler} />
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPagPosts} />
            </div>
        );
    }
}