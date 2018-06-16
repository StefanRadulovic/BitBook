import React, { Component } from 'react';
import { LoginRegister } from './LoginRegister';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row welcomeMainDiv'>
                    <div className='col-4 offset-1'>
                        <h3 id="welcomeTitle">Welcome to BitBook!</h3>
                        <p>Please log in or register and join our growing BitBook community.</p>
                    </div>
                    <div className='col-5 offset-1'>
                        <LoginRegister logInLogOut={this.props.logInLogOut} />
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;