import React, { Component } from 'react';
import { LoginRegister } from './LoginRegister';


class WelcomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
<<<<<<< HEAD
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
=======

>>>>>>> 014c9da8367ca1551e5be877bff31fc47c42bb95
        }
    }


    render() {
<<<<<<< HEAD
=======

>>>>>>> 014c9da8367ca1551e5be877bff31fc47c42bb95
        return (
            <div className='container'>
                <div className='row welcomeMainDiv'>
                    <div className='col-4 offset-1'>
                        <h3 id="welcomeTitle">Welcome to BitBook!</h3>
<<<<<<< HEAD
                        <p>Please log in or register and join our growing BitBook community.</p>
                    </div>
                    <div className='col-5 offset-1'>
                        <LoginRegister
                            setInputValues={this.setInputValues}
                        />
=======
                        <p>Please log in or register and join our constantly growing BitBook community.</p>
                    </div>
                    <div className='col-5 offset-1'>
                        <LoginRegister />
>>>>>>> 014c9da8367ca1551e5be877bff31fc47c42bb95
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;