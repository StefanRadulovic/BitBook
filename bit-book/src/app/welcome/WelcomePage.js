import React, { Component } from 'react';
import { LoginRegister } from './LoginRegister';


class WelcomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginEmail: '',
            loginPass: '',
            registerName: '',
            registerEmail: '',
            registerPass: '',
        }
    }


    setInputValues = event => {
        if (event.target.name === "loginEmail") {
            this.setState({
                loginEmail: event.target.value
            })
        } else if (event.target.name === "loginPass") {
            this.setState({
                loginPass: event.target.value
            })
        } else if (event.target.name === "registerName") {
            this.setState({
                registerName: event.target.value
            })
        } else if (event.target.name === "registerEmail") {
            this.setState({
                registerEmail: event.target.value
            })
        } else if (event.target.name === "registerPass") {
            this.setState({
                registerPass: event.target.value
            })

        }
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
                        <LoginRegister
                            setInputValues={this.setInputValues}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;