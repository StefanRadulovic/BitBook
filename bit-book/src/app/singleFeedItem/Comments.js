import React from 'react';
import singleFeedItemService from '../../services/singleFeedItemService';
import { LoadingScreen } from '../partials/LoadingScreen';
import SingleComment from './SingleComment';
import { NoComments } from './NoComments';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            profile: null,
            comments: null
        }
    }

    loadComments = () => {
        let postId = this.props.postId;
        singleFeedItemService.getComments(postId).then(data => {
            this.setState({
                comments: data
            });
        });
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            inputValue: value
        });
    }

    handleClick = (event) => {
        let comment = this.state.inputValue;
        let postId = this.props.postId;
        if (this.state.inputValue) {
            singleFeedItemService.addNewComment(comment, postId).then(data => {
                this.loadComments();
            });
            this.setState({
                inputValue: ""
            });
        }
    }

    componentDidMount() {
        this.loadComments();
    }

    render() {
        return (
            <div className="feed-item-comments">
                <div className="add-comment">
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="Add your comment" />
                    <div className="send-comment" onClick={this.handleClick}>Send</div>
                </div>
                {this.state.comments === null ? <LoadingScreen /> :
                    this.state.comments.length === 0 ? <NoComments /> :
                        this.state.comments.map((comment, i) => {
                            return <SingleComment comment={comment} key={i} />
                        })}
            </div>
        );
    }

}