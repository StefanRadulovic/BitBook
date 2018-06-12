import React from 'react';
import { Link } from 'react-router-dom';

export class FeedSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
            toggleCreateNew: false,
            menuClass: "",
            createNewClass: ""
        }
    }

    toggleMenu = () => {
        let toggle = !this.state.toggleMenu;
        let navClass = toggle ? "open-menu" : "";
        this.setState({
            toggleMenu: toggle,
            menuClass: navClass
        });
    }

    toggleCreateNew = () => {
        let toggle = !this.state.toggleCreateNew;
        let navClass = toggle ? "open-create-new" : "";
        this.setState({
            toggleCreateNew: toggle,
            createNewClass: navClass
        });
    }

    render() {
        return (
            <div className="feed-sidebar" >
                < div className="feed-sidebar-menu" onClick={this.toggleMenu}>Show on feed<i className="fas fa-caret-down" ></i></div >
                <ul className={this.state.menuClass}>
                    <li><Link to="/home">All posts</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/images">Images</Link></li>
                    <li><Link to="/text">Text</Link></li>
                </ul>
                <div className={"create-new-options " + this.state.createNewClass}>
                    <div><i className="fas fa-circle create-post"></i><div className="create-new-type">Post</div></div>
                    <div><i className="fas fa-circle create-image"></i><div className="create-new-type">Image</div></div>
                    <div><i className="fas fa-circle create-video"></i><div className="create-new-type">Video</div></div>
                </div>
                <div className="create-new-post" onClick={this.toggleCreateNew}><i className="fas fa-plus-circle"></i></div>
            </div >
        );
    }
}


