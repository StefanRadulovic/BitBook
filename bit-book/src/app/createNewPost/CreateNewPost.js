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
            inputValue: ""
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

    onOpenModal = () => {
        this.setState({
            open: true
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
            newPostService.addNewPost(post).then(data => {
                this.props.refreshFeed();
            });
            this.setState({
                open: false
            });
        }
    }

    render() {
        const { open } = this.state;
        return (
            <div className="add-post">
                <div className={"create-new-options " + this.state.createNewClass}>
                    <div>
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
                        <div className="create-new-type">Video</div>
                    </div>
                </div>

                <div className="create-new-post" onClick={this.toggleCreateNew}>
                    <div className={"new-post " + this.state.createNewClass}>New post</div>
                    <div className="plus">+</div>
                </div>
            </div>
        );
    }
}
