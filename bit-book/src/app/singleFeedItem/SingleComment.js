import React from 'react';
import peopleService from '../../services/peopleService';
import { timeSince } from '../../entities/timeSince';
import { Link } from 'react-router-dom';

export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorAvatar: ""
        }
    }

    componentDidMount() {
        peopleService.fetchSingleUserData(this.props.comment.authorId).then(data => {
            this.setState({
                authorAvatar: data.avatarUrl
            });
        });
    }

    render() {
        return (
            <div className="single-comment" >
                <div className="comment-writers-img"><img src={this.state.authorAvatar} alt={this.state.authorAvatar} /></div>
                <div className="comment-content">
                    <div className="comment-writers-name"><Link to={"/singleUser/" + this.props.comment.authorId}>{this.props.comment.authorName}</Link></div>
                    <div className="comment-text">{this.props.comment.body}</div>
                </div>
                <div className="comment-time">{timeSince(new Date(this.props.comment.dateCreated))}</div>
            </div >
        );
    }
}