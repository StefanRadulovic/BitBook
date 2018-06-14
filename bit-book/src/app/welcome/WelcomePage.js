import React, { Component } from 'react';
import { LoginRegister } from './LoginRegister';
import authentificationService from '../../services/authentificationService'

class WelcomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            pass: '',
            registerName: '',
            registerEmail: '',

        }
    }


    setInputValues = event => {
        if (event.target.name === "loginUsername") {

            this.setState({
                loginUsername: event.target.value
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


    logInHandler = () => {
        const logInObj = {
            username: this.state.username,
            password: this.state.pass
        }

        authentificationService.logIn(logInObj).then(data => {
            console.log(data);

        })
    }
    registerHandler = () => {
        const regObj = {
            username: this.state.username,
            password: this.state.pass,
            name: this.state.registerName,
            email: this.state.registerEmail
        }

        authentificationService.register(regObj).then(data => {
            console.log(data);

        })
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
                            logInHandler={this.logInHandler}
                            registerHandler={this.registerHandler}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;