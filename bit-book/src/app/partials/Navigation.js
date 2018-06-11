import React from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            navigationClass: ""
        }
    }

    toggleMenu = () => {
        let toggle = !this.state.toggle;
        let navClass = toggle ? "open" : "";
        this.setState({
            toggle: toggle,
            navigationClass: navClass
        });
    }

    render() {
        return (
            <div>
                <div className="menu-button" onClick={this.toggleMenu}><i className="fas fa-ellipsis-v"></i></div>
                <ul id="navigation" className={this.state.navigationClass}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/people'>People</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                </ul>
            </div>
        );
    }
}