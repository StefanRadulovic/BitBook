import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../shared/constants';


class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }


    componentDidMount() {
        profileService.getProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                })
            })
    }


    profileImage = () => {
        if (this.state.profile.avatarUrl === undefined) {
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
            <div className="container">
                {this.profileImage()}
                <h1>{this.state.profile.name}</h1>
                <p><Link>Edit profile</Link></p>
                <p>{this.state.profile.aboutShort}</p>
                <button type="button" class="btn btn-light">{this.state.profile.postsCount} posts</button>
                <button type="button" class="btn btn-light">{this.state.profile.commentsCount} comments</button>
            </div>
        )
    }
}

export default MyProfilePage;