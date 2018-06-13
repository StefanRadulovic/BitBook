import React from 'react';
import singleFeedService from '../../services/singleFeedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { SingleTextPost } from './SingleTextPost';
import { SingleImagePost } from './SingleImagePost';
import { SingleVideoPost } from './SingleVideoPost';
import { Comments } from './Comments';

export default class SingleFeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            comments: null
        }
    }

    loadPost = () => {

        let postId = this.props.match.params.id;
        let type = this.props.match.params.type;

        singleFeedService.getPostByType(postId, type).then(data => {
            this.setState({
                post: data
            });
        });
    }

    loadComments = () => {

        let postId = this.props.match.params.id;
        singleFeedService.getComments(postId).then(data => {
            this.setState({
                comments: data
            });
        });
    }

    componentDidMount() {
        this.loadPost();
        this.loadComments();
    }

    render() {
        return this.state.post === null ? <LoadingScreen /> : (
            <div className="single-feed-item">
                {this.state.post.type === "text" ? <SingleTextPost post={this.state.post} comments={this.state.comments} />
                    : this.state.post.type === "image" ? <SingleImagePost post={this.state.post} comments={this.state.comments} />
                        : <SingleVideoPost post={this.state.post} comments={this.state.comments} />}
                <div className="feed-item-comments">
                    <Comments comments={this.state.comments} />
                </div>
            </div>
        );
    }
}