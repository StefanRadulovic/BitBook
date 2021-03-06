import React from 'react';
import postService from '../../services/postService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';



export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            pageSkip: 0,

        }

    }
    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + Math.ceil(window.pageYOffset);

        if (windowBottom >= docHeight) {
            if (this.state.posts !== null) {

                postService.getPagPosts(this.state.pageSkip)
                    .then(posts => {
                        const newSkip = this.state.pageSkip + 1;
                        const copyPosts = this.state.posts.slice();
                        const newPosts = copyPosts.concat(posts);

                        this.setState({
                            posts: newPosts,
                            pageSkip: newSkip

                        })
                    })
            }
            posts: null
        }
    }

    loadPosts = () => {

        postService.getPagPosts(this.state.pageSkip).then(data => {

            const newPageSkip = this.state.pageSkip + 1
            this.setState({
                posts: data,
                pageSkip: newPageSkip
            });

        });
    }
    refreshFeed = () => {
        this.setState({
            pageSkip: 0
        });
        this.loadPosts();
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.loadPosts();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);  // da kad predjemo na drugi page nemamo vise listener jer smo ga prikacili na windov i on ostaje tu dok se ne skloniS
    }

    onScrollHandler = (event) => {
        // console.log(event.view.innerHeight);
        console.log(event);


    }
    componentDidMount() {

        this.loadPosts();
    }

    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed">
                <FeedContent posts={this.state.posts} refreshFeed={this.refreshFeed} />
                {/* <FilterPosts /> */}
                <CreateNewPost refreshFeed={this.refreshFeed} />
            </div>
        );
    }
}