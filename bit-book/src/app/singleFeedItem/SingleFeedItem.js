import React from 'react';
import singleFeedItemService from '../../services/singleFeedItemService';
import { timeSince } from '../../entities/timeSince';
import { LoadingScreen } from '../partials/LoadingScreen';
import { SingleTextPost } from './SingleTextPost';
import { SingleImagePost } from './SingleImagePost';
import { SingleVideoPost } from './SingleVideoPost';
import { PostAuthor } from '../partials/PostAuthor';
import Comments from './Comments';
import { Link } from 'react-router-dom';

export default class SingleFeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            comments: [],
            user: null
        }
    }

    loadPost = () => {

        let postId = this.props.match.params.id;
        let type = this.props.match.params.type;

        singleFeedItemService.getPostByType(postId, type).then(data => {
            this.setState({
                post: data
            });
        });
    }

    loadComments = () => {
        let postId = this.props.match.params.id;
        singleFeedItemService.getComments(postId).then(data => {
            this.setState({
                comments: data
            });
        });
    }

    updateComments = () => {
        this.loadComments();
    }

    componentDidMount() {
        this.loadPost();
        this.loadComments();
    }

    render() {
        return this.state.post === null ? <LoadingScreen /> : (
            <div className="single-feed-item">
                <PostAuthor post={this.state.post} />
                {this.state.post.type === "text" ? <SingleTextPost post={this.state.post} comments={this.state.comments} />
                    : this.state.post.type === "image" ? <SingleImagePost post={this.state.post} comments={this.state.comments} />
                        : <SingleVideoPost post={this.state.post} comments={this.state.comments} />}
                <div className="feed-item-comments">
                    <Comments comments={this.state.comments} postId={this.state.post.id} updateComments={this.updateComments} />
                </div>
            </div >
        );
    }
}