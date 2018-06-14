import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';

import Modal from 'react-responsive-modal';
import ProfileUpdate from './ProfileUpdate';
// import UploadPicture from './UploadPicture'


class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            open: false,
            nameInput: '',
            aboutInput: '',
            openSecondModal: false,
        }
        this.updateName = this.updateName.bind(this);
        this.updateAbout = this.updateAbout.bind(this);

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
    updateAbout = (text) => {
        this.setState({
            aboutInput: text
        })
    }
    onOpenSecondModal = () => {
        this.setState({ openSecondModal: true });
    };

    onCloseSecondModal = () => {
        this.setState({ openSecondModal: false });
    };

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
                <p className="btn btn-action" onClick={this.onOpenModal}>Edit profile</p>
                <p>{this.state.profile.about}</p>

                < Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                    <h2>Update profile</h2>

                    <ProfileUpdate updateName={this.updateName} updateAbout={this.updateAbout} onCloseClickHandler={this.onCloseModal} openSecondModal={this.onOpenSecondModal} />

                </Modal >

                <Modal open={this.state.openSecondModal} onClose={this.onCloseSecondModal} center className={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                    {/* <UploadPicture /> */}

                </Modal>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.postsCount} Posts</button>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.commentsCount} Comments</button>

            </div >
        )

    }
}

export default MyProfilePage;