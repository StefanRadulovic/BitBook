import React from 'react';
import postService from '../../services/postService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { SingleTextPost } from './SingleTextPost';
import { SingleImagePost } from './SingleImagePost';
import { SingleVideoPost } from './SingleVideoPost';
import { PostAuthor } from '../partials/PostAuthor';
import Comments from './Comments';
import Feed from '../feed/Feed';

export default class SingleFeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            user: null,
            deleted: false
        }
    }

    loadPost = () => {

        let postId = this.props.match.params.id;
        let type = this.props.match.params.type;

        postService.getPostByType(postId, type).then(data => {
            this.setState({
                post: data
            });
        });
    }

    redirectToFeed = () => {
        this.setState({
            deleted: true
        })
    }

    componentDidMount() {
        this.loadPost();
    }

    render() {
        return this.state.deleted ? <Feed /> :
            this.state.post === null ? <LoadingScreen /> : (
                <div className="single-feed-item">
                    <PostAuthor post={this.state.post} refreshFeed={this.redirectToFeed} />
                    {this.state.post.type === "text" ? <SingleTextPost post={this.state.post} />
                        : this.state.post.type === "image" ? <SingleImagePost post={this.state.post} />
                            : <SingleVideoPost post={this.state.post} />}
                    <div className="feed-item-comments">
                        <Comments postId={this.state.post.id} />
                    </div>
                </div >
            );
    }
}