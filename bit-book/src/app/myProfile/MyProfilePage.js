import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../shared/constants';
import Modal from 'react-responsive-modal';
import ProfileUpdate from './ProfileUpdate';
import UploadPicture from './UploadPicture'


class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            open: false,
            nameInput: '',
            aboutInput: '',
            openSecondModal: false,
            imageUploadUrl: null,
            fileImg: {},
            updateError: ''
            // userId: this.props.match.params.userId
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
    onSaveHandler = () => {
        const profileObj = {
            'name': this.state.nameInput,
            'email': this.state.nameInput,
            'about': this.state.aboutInput,
            'aboutShort': this.state.aboutInput,
            'avatarUrl': this.state.imageUploadUrl,
        }


        profileService.updateProfile(profileObj).then(data => {

            if (data) {

                this.setState({
                    updateError: data.message
                })
            }
        })

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
    onClosePictureUpload=()=>{
        this.setState({
            openSecondModal: false,
            imageUploadUrl: null            
        })
    }
    onCloseClickHandler=()=>{
        
        
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
                    <UploadPicture uploadFileHandler={this.uploadFileHandler} photoUrl={this.setImgurl} selectProfileImageHandler={this.selectProfileImageHandler} imgUrl={this.state.imageUploadUrl} close={this.onClosePictureUpload} upLoadUrl={this.onCloseSecondModal}/>

                </Modal>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.postsCount} Posts</button>
                <button type="button" className="btn btn-light postCommentButton"><i className="fas fa-circle"></i> {this.state.profile.commentsCount} Comments</button>

            </div >
        )

    }
}

export default MyProfilePage;