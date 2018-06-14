import React from 'react';
import newPostService from '../../services/newPostService';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

export class CreateNewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCreateNew: false,
            createNewClass: "",
            open: false,
<<<<<<< HEAD
            postType: "",
            inputValue: "",
            title: "",
            postDescription: ""
=======
            inputValue: ""
>>>>>>> Add new text post.
        }
    }

    toggleCreateNew = () => {
        let toggle = !this.state.toggleCreateNew;
        let navClass = toggle ? "open-create-new" : "";
        this.setState({
            toggleCreateNew: toggle,
            createNewClass: navClass
        });
    }

<<<<<<< HEAD
    onOpenTextModal = () => {
        this.setState({
            open: true,
            postType: "text",
            title: "Text post",
            postDescription: "Post content"
        });
    }

    onOpenImageModal = () => {
        this.setState({
            open: true,
            postType: "image",
            title: "Image post",
            postDescription: "Image link"
        });
    }

    onOpenVideoModal = () => {
        this.setState({
            open: true,
            postType: "video",
            title: "Video post",
            postDescription: "Youtube video link"
=======
    onOpenModal = () => {
        this.setState({
            open: true
>>>>>>> Add new text post.
        });
    }

    onCloseModal = () => {
        this.setState({
            open: false,
            inputValue: ""
        });
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            inputValue: value
        });
    }

    handleClick = (event) => {
        let post = this.state.inputValue;
        if (this.state.inputValue) {
<<<<<<< HEAD

            if (this.state.postType === "text") {
                newPostService.addNewTextPost(post).then(data => {
                    this.props.refreshFeed();
                });
            }

            if (this.state.postType === "image") {
                newPostService.addNewImagePost(post).then(data => {
                    this.props.refreshFeed();
                });
            }

            if (this.state.postType === "video") {
                newPostService.addNewVideoPost(post).then(data => {
                    this.props.refreshFeed();
                });
            }

            this.setState({
                open: false,
                inputValue: ""
=======
            newPostService.addNewPost(post).then(data => {
                this.props.refreshFeed();
            });
            this.setState({
                open: false
>>>>>>> Add new text post.
            });
        }
    }

    render() {
        const { open } = this.state;
<<<<<<< HEAD
        const { title } = this.state;
        const { postDescription } = this.state;
=======
>>>>>>> Add new text post.
        return (
            <div className="add-post">
                <div className={"create-new-options " + this.state.createNewClass}>
                    <div>
<<<<<<< HEAD
                        <div id="create-post" onClick={this.onOpenTextModal}></div>
                        <div className="create-new-type">Post</div>
                    </div>
                    <div>
                        <div id="create-image" onClick={this.onOpenImageModal}></div>
                        <div className="create-new-type">Image</div>
                    </div>
                    <div>
                        <div id="create-video" onClick={this.onOpenVideoModal}></div>
=======
                        <div id="create-post" onClick={this.onOpenModal}></div>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <h5 className="new-post-title">New post</h5>
                            <p className="new-post-description">Post content</p>
                            <input className="new-post-content" type="text" value={this.state.inputValue} onChange={this.handleChange} />
                            <div className="send-post" onClick={this.handleClick}>POST</div>
                        </Modal>
                        <div className="create-new-type">Post</div>
                    </div>
                    <div>
                        <div id="create-image"><Link to=""></Link></div>
                        <div className="create-new-type">Image</div>
                    </div>
                    <div>
                        <div id="create-video"><Link to=""></Link></div>
>>>>>>> Add new text post.
                        <div className="create-new-type">Video</div>
                    </div>
                </div>

                <div className="create-new-post" onClick={this.toggleCreateNew}>
                    <div className={"new-post " + this.state.createNewClass}>New post</div>
                    <div className="plus">+</div>
                </div>
<<<<<<< HEAD
                <Modal open={open} title={title} onClose={this.onCloseModal} center>
                    <h5 className="new-post-title">{title}</h5>
                    <p className="new-post-description">{postDescription}</p>
                    <input className="new-post-content" type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    <div className="send-post" onClick={this.handleClick}>POST</div>
                </Modal>
=======
>>>>>>> Add new text post.
            </div>
        );
    }
}
