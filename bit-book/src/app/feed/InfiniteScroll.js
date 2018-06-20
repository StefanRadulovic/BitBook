import React from 'react';
<<<<<<< HEAD
// import feedService from '../../services/feedService';;
=======
// import feedService from '../../services/feedService';
>>>>>>> 0ba09da94dec67dda9a01031465a93e212fe504c
import { LoadingScreen } from '../partials/LoadingScreen';
import { FeedContent } from './FeedContent';
import { FilterPosts } from './FilterPosts';
import { CreateNewPost } from '../createNewPost/CreateNewPost';
import infiniteScrollFeedService from '../../services/infiniteScrollFeedService';

<<<<<<< HEAD

=======
>>>>>>> 0ba09da94dec67dda9a01031465a93e212fe504c
export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            posts: null,
            pageSkip: 0,
            // height: window.innerHeight
        }
        this.scroll = React.createRef()
    }
    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + Math.ceil(window.pageYOffset);

        if (windowBottom >= docHeight) {


            infiniteScrollFeedService.getPosts(this.state.pageSkip)
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
    }
=======
            posts: null
        }
        this.scroll = React.createRef()
    }

>>>>>>> 0ba09da94dec67dda9a01031465a93e212fe504c
    loadPosts = () => {

        infiniteScrollFeedService.getPosts(1).then(data => {


            this.setState({
                posts: data
            });

        });
    }
<<<<<<< HEAD

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.loadPosts();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);  // da kad predjemo na drugi page nemamo vise listener jer smo ga prikacili na windov i on ostaje tu dok se ne skloniS
    }




    render() {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed" ref={this.scroll}>
                <FeedContent posts={this.state.posts} hasMore={this.state.hasMoreItems} reshFeed={this.loadPosts} />
=======
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
                <FeedContent posts={this.state.posts} refreshFeed={this.loadPosts} />
>>>>>>> 0ba09da94dec67dda9a01031465a93e212fe504c
                <FilterPosts />
                <CreateNewPost refreshFeed={this.loadPosts} />
            </div>
        );
    }
}