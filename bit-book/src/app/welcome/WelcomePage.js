import React, { Component } from 'react';
import { LoginRegister } from './LoginRegister';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row welcome-main-div'>
                    <div className='welcome-sub-divs col-md-4 offset-md-1'>
                        <h3 id="welcomeTitle">Welcome to BitBook!</h3>
                        <p>Please log in or register and join our growing BitBook community.</p>
                    </div>
                    <div className='col-md-5 offset-md-1'>
                        <LoginRegister logInLogOut={this.props.logInLogOut} />
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;