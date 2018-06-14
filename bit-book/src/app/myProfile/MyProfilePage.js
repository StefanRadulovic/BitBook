import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../shared/constants';
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
            errorImgUrl: ''
            // userId: this.props.match.params.userId
        }

    }

    reloadPage = () => {
        profileService.getProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                })
            })
    }
    componentDidMount() {
        this.reloadPage()
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false, updateError: '' });
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
        this.setState({
            openSecondModal: false,
            errorImgUrl: '',
            imageUploadUrl: '',

        });
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
    onSaveHandler = () => {
        if (this.state.nameInput.length <= 30) {
            const profileObj = {
                'name': this.state.nameInput,
                'email': this.state.nameInput,
                'about': this.state.aboutInput,
                'aboutShort': this.state.aboutInput,
                'avatarUrl': this.state.imageUploadUrl,
            }


            profileService.updateProfile(profileObj).then(data => {

                this.setState({
                    updateError: '',
                    open: false
                })
                this.reloadPage()

            }).catch(err => {
                this.setState({
                    updateError: err.message
                })


            })
        } else {
            this.setState({
                updateError: "Name is too long!"
            })
        }

    }
    uploadFileHandler = () => {

        const formData = new FormData();
        formData.append('file', this.state.fileImg)
        profileService.uploadImage(formData).then(data => {
            this.setState({
                imageUploadUrl: data,
                openSecondModal: false

            })
        })

    }
    selectProfileImageHandler = (event) => {
        this.setState({
            fileImg: event.target.files[0]
        })

    }
    onClosePictureUpload = () => {
        this.setState({
            openSecondModal: false,
            imageUploadUrl: '',
            errorImgUrl: ''

        })
    }
    onCloseClickHandler = () => {


        this.setState({
            imageUploadUrl: null,

        })
        this.onCloseModal()

    }
    setImgurl = (text) => {
        this.setState({
            imageUploadUrl: text
        })
    }
    upLoadUrl = () => {
        if (validateImgURL(this.state.imageUploadUrl)) {

            this.setState({
                openSecondModal: false,
                errorImgUrl: '',


            })
        } else {
            this.setState({
                errorImgUrl: "Input correct url!"
            })
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

                    <ProfileUpdate updateName={this.updateName} updateAbout={this.updateAbout} onCloseClickHandler={this.onCloseClickHandler} openSecondModal={this.onOpenSecondModal} onSaveHandler={this.onSaveHandler} imgUrl={this.state.imageUploadUrl} error={this.state.updateError} />

                </Modal >

                <Modal open={this.state.openSecondModal} onClose={this.onCloseSecondModal} center className={{ overlay: 'custom-overlay', modal: 'custom-modal2' }}>
                    <UploadPicture uploadFileHandler={this.uploadFileHandler} photoUrl={this.setImgurl} selectProfileImageHandler={this.selectProfileImageHandler} imgUrl={this.state.imageUploadUrl} close={this.onClosePictureUpload} upLoadUrl={this.upLoadUrl} errorImgUrl={this.state.errorImgUrl} />

                </Modal>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.postsCount} Posts</button>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.commentsCount} Comments</button>

            </div >
        )

    }
}

export default MyProfilePage;