import React from 'react';
import peopleService from '../../services/peopleService';
import { timeSince } from '../../entities/timeSince';
import { Link } from 'react-router-dom';

export class PostAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    loadUserData = () => {
        peopleService.fetchSingleUserData(this.props.post.userId).then(data => {
            this.setState({
                user: data
            });
        });
    }

    componentDidMount() {
        this.loadUserData();
    }

    render() {
        return this.state.user === null ? "" : (
            <div className="post-writer">
                <div className="post-writers-img"><img src={this.state.user.avatarUrl} alt={this.state.user.name} /></div>
                <div className="post-writers-details">
                    <div className="post-writers-name"><Link to={"/people/" + this.state.user.userId}>{this.state.user.name}</Link></div>
                    <div className="post-time">{timeSince(new Date(this.props.post.dateCreated))}</div>
                </div>
            </div>
        );
    }
}