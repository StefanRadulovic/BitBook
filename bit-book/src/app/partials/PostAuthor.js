import React from 'react';
import userService from '../../services/userService';
import postService from '../../services/postService';
import { timeSince } from '../../shared/utils';
import { Link } from 'react-router-dom';

export class PostAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    loadUserData = () => {
        userService.getUserProfile(this.props.post.userId)
            .then(data => {
                this.setState({
                    user: data
                });
            });
    }

    handleClick = () => {
        let postId = this.props.post.id;
        let userId = this.state.user.id;
        postService.deletePost(postId, userId)
            .then(data => {

                this.props.refreshFeed();
            });
    }

    componentDidMount() {

        this.loadUserData();
    }


    render() {
        return this.state.user === null ? "" : (
            <div className="post-author">
                <div className="post-author-img"><img src={this.state.user.avatarUrl} alt={this.state.user.name} /></div>
                <div className="post-author-details">
                    <div className="post-author-name"><Link to={`/people/${this.state.user.userId}`}>{this.state.user.name}</Link></div>
                    <div className="post-time">{timeSince(new Date(this.props.post.dateCreated))}</div>
                </div>
                {this.props.post.userId === JSON.parse(localStorage.getItem('userId')) ?
                    <div className="delete-post" onClick={this.handleClick}>Delete post</div> : ""}
            </div>
        );
    }
}