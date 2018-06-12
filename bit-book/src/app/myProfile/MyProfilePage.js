import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../shared/constants';
import Modal from 'react-responsive-modal';
import ProfileUpdate from './ProfileUpdate';


class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            open: false,
            nameInput: '',
        }
        this.updateName = this.updateName.bind(this)
    }


    componentDidMount() {
        profileService.getProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                })
            })
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    updateName = (text) => {
        this.setState({
            nameInput: text
        })
    }
    profileImage = () => {

        // if (this.state.profile.avatarUrl === undefined) {
        if (true) {
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
                <p className="btn btn-action" onClick={this.onOpenModal}>Edit profile</p>
                <p>{this.state.profile.about}</p>

                < Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                    <h2>Update profile</h2>

                    <ProfileUpdate update={this.updateName} />

                </Modal >
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.postsCount} Posts</button>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.commentsCount} Comments</button>

            </div >
        )

    }
}

export default MyProfilePage;