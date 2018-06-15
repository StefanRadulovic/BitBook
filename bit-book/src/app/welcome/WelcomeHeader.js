import React from 'react';
import { Link } from 'react-router-dom';

export default class WelcomeHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.logInLogOut();
    }

    render() {
        return (
            <header>
                <div id="header-wrap">
                    <h1 id="app-title"><Link to=''>Bitbook</Link></h1>
                    <div className="log-out" onClick={this.handleClick}>Log out</div>
                </div>
            </header>
        );
    }
}