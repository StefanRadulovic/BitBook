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

    handleClick = () => {
        localStorage.removeItem('logIn')
        this.props.logInLogOut(false);
    }

    render() {
        return (
            <div>
                <div className="menu-button" onClick={this.toggleMenu}><i className="fas fa-ellipsis-v"></i></div>
                <ul id="navigation" className={this.state.navigationClass}>
                    <li className="navigation"><Link to='/posts'>Feed</Link></li>
                    <li className="navigation"><Link to='/people'>People</Link></li>
                    <li className="navigation"><Link to='/profile'>Profile</Link></li>
                    <li className="navigation" id="log-out" onClick={this.handleClick}><Link to='/'>Log out</Link></li>
                </ul>
            </div>
        );
    }
}