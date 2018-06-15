import React from 'react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        localStorage.removeItem('logIn')
        this.props.logInLogOut();
    }

    render() {
        return (
            <header>
                <div id="header-wrap">
                    <h1 id="app-title"><Link to='/posts'>Bitbook</Link></h1>
                    <Navigation />
                </div>
                <div className="log-out" onClick={this.handleClick}><Link to='/'>Log out</Link></div>
            </header >
        );
    }
}