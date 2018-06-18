import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ProfileUpdate from './ProfileUpdate';
import UploadPicture from './UploadPicture';
import { validateImgURL } from '../../shared/validateUrl'

class MyProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            open: false,
            nameInput: '',
            aboutInput: '',
            openSecondModal: false,
            imageUploadUrl: '',
            fileImg: {},
            updateError: '',
            errorImgUrl: '',
            profileEmail: '',
            ourEmail: '',
        }
    }

    getUserProfile = () => {

        const id = this.props.match.params.id;
        profileService.getUserProfile(id).then(profile => {
            this.setState({
                profile: profile,
                profileEmail: profile.email,
                nameInput: profile.name,
                aboutInput: profile.about,
                imageUploadUrl: profile.avatarUrl
            });
        });
    }

    reloadPage = () => {

        profileService.getMyProfile()
            .then(profile => {
                this.setState({
                    profile: profile,
                    nameInput: profile.name,
                    aboutInput: profile.about,
                    imageUploadUrl: profile.avatarUrl,
                    profileEmail: profile.email
                });
            });
    }

    componentDidMount() {
        const local = localStorage.getItem('logIn');
        const ourEmail = JSON.parse(local).email;
        this.setState({
            ourEmail
        });
        console.log(this.props.match.params.id);
        (!this.props.match.params.id) ? this.reloadPage() : this.getUserProfile();
    }
    componentWillReceiveProps(nextProps) {

        (!nextProps.match.params.id) ? this.reloadPage() : this.getUserProfile();
    }
    onOpenModal = () => {
        this.setState({ open: true });
    }

    onCloseModal = () => {
        this.setState({ open: false, updateError: '' });
    }
    updateName = (text) => {
        this.setState({
            nameInput: text
        });
    }
    updateAbout = (text) => {
        this.setState({
            aboutInput: text
        });
    }

    onOpenSecondModal = () => {
        this.setState({ openSecondModal: true });
    }

    onCloseSecondModal = () => {
        this.setState({
            openSecondModal: false,
            errorImgUrl: '',

        });
    }

    profileImage = () => {

        if (!this.state.profile.avatarUrl) {
            return (
                <div class="profile-img">
                    <img className="profileImg" src="https://intellihr.com.au/wp-content/uploads/2017/06/avatar_placeholder_temporary.png" />
                </div>
            )
        } else {
            return (
                <div class="profile-img">
                    <img className="profileImg" src={this.state.profile.avatarUrl} />
                </div>
            );
        }
    }

    onSaveHandler = () => {
        if (this.state.nameInput.length <= 30) {
            const profileObj = {
                'name': this.state.nameInput,
                'email': this.state.nameInput,
                'about': this.state.aboutInput,
                'aboutShort': this.state.aboutInput,
                'avatarUrl': this.state.imageUploadUrl
            }

            profileService.updateProfile(profileObj).then(data => {

                this.setState({
                    updateError: '',
                    open: false
                })
                this.reloadPage();
            }).catch(err => {
                this.setState({
                    updateError: err.message
                });
            });
        } else {
            this.setState({
                updateError: "Name is too long!"
            });
        }
    }

    uploadFileHandler = () => {

        const formData = new FormData();
        formData.append('file', this.state.fileImg)
        profileService.uploadImage(formData).then(data => {
            this.setState({
                imageUploadUrl: data,
                openSecondModal: false
            });
        });
    }

    selectProfileImageHandler = (event) => {
        this.setState({
            fileImg: event.target.files[0]
        });

    }
    onClosePictureUpload = () => {
        this.setState({
            openSecondModal: false,

            errorImgUrl: ''
        });
    }

    onCloseClickHandler = () => {

        this.onCloseModal()
    }

    setImgUrl = (text) => {
        this.setState({
            imageUploadUrl: text
        });
    }

    upLoadUrl = () => {
        if (validateImgURL(this.state.imageUploadUrl)) {

            this.setState({
                openSecondModal: false,
                errorImgUrl: '',
            });
        } else {
            this.setState({
                errorImgUrl: "Input correct url!"
            });
        }
    }

    render() {
        return (
            <div className="my-profile-page">
                {this.profileImage()}
                <h1>{this.state.profile.name}</h1>
                {(this.state.profileEmail != this.state.ourEmail) ? '' : <div className="edit-profile" onClick={this.onOpenModal}>Edit profile</div>}
                <p>{this.state.profile.about}</p>
                < Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                    classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                    <h2>Update profile</h2>
                    <ProfileUpdate updateName={this.updateName} updateAbout={this.updateAbout} onCloseClickHandler={this.onCloseClickHandler} openSecondModal={this.onOpenSecondModal} onSaveHandler={this.onSaveHandler} imgUrl={this.state.imageUploadUrl} error={this.state.updateError} nameText={this.state.nameInput} about={this.state.aboutInput} />
                </Modal >

                <Modal open={this.state.openSecondModal} onClose={this.onCloseSecondModal} center className={{ overlay: 'custom-overlay', modal: 'custom-modal2' }}>
                    <UploadPicture uploadFileHandler={this.uploadFileHandler} photoUrl={this.setImgUrl} selectProfileImageHandler={this.selectProfileImageHandler} imgUrl={this.state.imageUploadUrl} close={this.onClosePictureUpload} upLoadUrl={this.upLoadUrl} errorImgUrl={this.state.errorImgUrl} />
                </Modal>
                <div className="posts-and-comments">
                    <div className="btn btn-light postCommentButton user-posts"><i className="fas fa-circle"></i> {this.state.profile.postsCount} Posts</div>
                    <div className="btn btn-light postCommentButton user-comments"><i className="fas fa-circle"></i> {this.state.profile.commentsCount} Comments</div>
                </div>
            </div >
        );
    }
}

export default MyProfilePage;