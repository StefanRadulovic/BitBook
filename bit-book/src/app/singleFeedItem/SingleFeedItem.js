import React from 'react';
import singleFeedService from '../../services/singleFeedService';
import { LoadingScreen } from '../partials/LoadingScreen';
import { TextPost } from '../feed/TextPost';
import { ImagePost } from '../feed/ImagePost';
import { VideoPost } from '../feed/VideoPost';

export default class SingleFeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
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

    componentDidMount() {
        this.loadPost();
    }

    render() {
        return this.state.post === null ? <LoadingScreen /> : (
            <div className="single-feed-item">
                {this.state.post.type === "text" ? <TextPost post={this.state.post} />
                    : this.state.post.type === "image" ? <ImagePost post={this.state.post} />
                        : <VideoPost post={this.state.post} />}
            </div>
        );
    }
}