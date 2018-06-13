import React, { Component } from 'react';
import peopleService from '../../services/peopleService';
import { apiUrl } from '../../shared/constants';


class SingleUserProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
        }
    }

    componentDidMount() {
        peopleService.fetchSingleUserData(this.props.match.params.userId)
            .then(profile => {
                this.setState({
                    profile: profile
                })
            })
    }

    profileImage = () => {
        if (!this.state.profile.avatarUrl) {
            return (
                <img className="profileImg" src="https://intellihr.com.au/wp-content/uploads/2017/06/avatar_placeholder_temporary.png" />
            )
        } else {
            return (
                <img className="profileImg" src={this.state.profile.avatarUrl} />
            )
        }
    }

    render() {
        return (
            <div className="container profile">
                {this.profileImage()}
                <h1>{this.state.profile.name}</h1>
                <p>{this.state.profile.about}</p>

                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.postsCount} Posts</button>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.commentsCount} Comments</button>

            </div >
        )

    }
}

export default SingleUserProfilePage;