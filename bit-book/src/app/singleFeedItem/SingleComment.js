import React from 'react';
import peopleService from '../../services/peopleService';

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
            })
        })
    }

    render() {
        return (
            <div className="single-comment" >
                <div className="comment-writer">
                    <div className="comment-writers-img"><img src={this.state.authorAvatar} alt={this.state.authorAvatar} /></div>
                    <div className="comment-writers-name">{this.props.comment.authorName}</div>
                </div>
                <div className="comment-content">{this.props.comment.body}</div>
            </div >
        );
    }
}