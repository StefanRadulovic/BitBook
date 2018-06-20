import React from 'react';
import postService from '../../services/postService';
import { validateImgURL } from '../../shared/validateUrl';
import { validateVideoUrl } from '../../shared/validateUrl';
import { getVideoId } from '../../shared/validateUrl';
import Modal from 'react-responsive-modal';

export class CreateNewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCreateNew: false,
            createNewClass: "",
            open: false,
            postType: "",
            inputValue: "",
            title: "",
            postDescription: "",
            invalidUrlClass: ""
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
        });
    }

    onCloseModal = () => {
        this.closeModal();
    }

    closeModal = () => {
        this.setState({
            open: false,
            inputValue: "",
            invalidUrlClass: "invalid-url-hidden"
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
        if (post) {

            if (this.state.postType === "text") {
                postService.addNewTextPost(post).then(data => {
                    this.props.refreshFeed();
                }).then(data => this.closeModal());
            }

            if (this.state.postType === "image") {

                if (validateImgURL(post)) {
                    postService.addNewImagePost(post).then(data => {
                        this.props.refreshFeed();
                    }).then(data => this.closeModal());
                } else {
                    this.setState({
                        invalidUrlClass: "invalid-url-visible"
                    });
                }
            }

            if (this.state.postType === "video") {

                if (validateVideoUrl(post)) {
                    let videoUrlParams = getVideoId(post);
                    let url = "https://www.youtube.com/embed/" + videoUrlParams[5];
                    postService.addNewVideoPost(url).then(data => {
                        this.props.refreshFeed();
                    }).then(data => this.closeModal());
                } else {
                    this.setState({
                        invalidUrlClass: "invalid-url-visible"
                    });
                }
            }
        }
    }

    keyUpHandler = (event) => {
        if (event.keyCode === 13) {
            this.handleClick();
        }
    }

    render() {
        const { open } = this.state;
        const { title } = this.state;
        const { postDescription } = this.state;
        const { invalidUrlClass } = this.state;
        return (
            <div className="add-post">
                <div className={"create-new-options " + this.state.createNewClass}>
                    <div>
                        <div className="create-post" id="create-post" onClick={this.onOpenTextModal}><i className="fas fa-align-justify"></i></div>
                    </div>
                    <div>
                        <div className="create-post" id="create-image" onClick={this.onOpenImageModal}><i className="far fa-image"></i></div>
                    </div>
                    <div>
                        <div className="create-post" id="create-video" onClick={this.onOpenVideoModal}><i className="fab fa-youtube"></i></div>
                    </div>
                </div>

                <div className="create-new-post" onClick={this.toggleCreateNew}>
                    <div className="plus">+</div>
                </div>
                <Modal open={open} title={title} onClose={this.onCloseModal} center>
                    <h5 className="new-post-title">{title}</h5>
                    <p className="new-post-description">{postDescription}</p>
                    <input className="new-post-content" type="text" value={this.state.inputValue} onChange={this.handleChange} onKeyUp={this.keyUpHandler} autoFocus />
                    <div className={"invalid-url-hidden " + invalidUrlClass}>Invalid url!</div>
                    <div className="send-post" onClick={this.handleClick}>POST</div>
                </Modal>
            </div>
        );
    }
}
