import React from 'react';
import { Link } from 'react-router-dom';

export class FilterPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
            menuClass: ""
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

    render() {
        return (
            <div className="filter-posts">
                <div className="feed-posts-menu" onClick={this.toggleMenu}>Show on feed<i className="fas fa-caret-down" ></i></div >
                <ul className={this.state.menuClass}>
                    <li><Link to="/home">All posts</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/images">Images</Link></li>
                    <li><Link to="/text">Text</Link></li>
                </ul>
            </div>
        );
    }
}
