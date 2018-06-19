import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import authenticationService from '../../services/authenticationService';
import profileService from '../../services/profileService';


export class LoginRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            username: '',
            pass: '',
            registerName: '',
            registerEmail: '',
            error: '',
            passLengthError: ''
        };
    }

    handleChange = event => {
        if (event.target.name === "loginUsername") {

            this.setState({
                username: event.target.value
            })
        } else if (event.target.name === "loginPass") {

            this.setState({
                pass: event.target.value
            })
        } else if (event.target.name === "registerName") {

            this.setState({
                registerName: event.target.value
            })
        } else if (event.target.name === "registerUsername") {

            this.setState({
                username: event.target.value
            })
        } else if (event.target.name === "registerPass") {

            this.setState({
                pass: event.target.value
            })

        } else if (event.target.name === "registerEmail") {

            this.setState({
                registerEmail: event.target.value
            })

        }
    }

    logInHandler = () => {

        const logInObj = {
            username: this.state.username,
            password: this.state.pass
        }

        authenticationService.logIn(logInObj).then(() => {


            this.props.logInLogOut(true);

            profileService.getMyProfile().then(data => {
                localStorage.setItem('userId', data.userId);
            });
        }).catch(err => this.setState({
            error: err
        }));
    }

    keyUpHandler = (event) => {
        if (event.keyCode === 13) {
            this.logInHandler()
        }
    }

    registerHandler = (event) => {
        if (this.state.pass.length >= 6) {
            const regObj = {
                username: this.state.username,
                password: this.state.pass,
                name: this.state.registerName,
                email: this.state.registerEmail
            };

            authenticationService.register(regObj).then(data => {
                this.setState({
                    username: '',
                    pass: '',
                    registerName: '',
                    registerEmail: '',
                    currentIndex: 0
                });
            }).catch(err => {
                this.setState({
                    error: err
                })

            })
        } else {
            this.setState({
                passLengthError: "Password too short! Password mast have at least 6 characters!"
            })
        }

    }

    onTabSelect = (index) => {
        this.setState({
            currentIndex: index,
        });
    }

    render() {
        return (
            <Tabs className="container tabs" selectedIndex={this.state.currentIndex} onSelect={this.onTabSelect}>
                <TabList className="row tabList" >
                    <Tab className="col-6">Log In</Tab>
                    <Tab className="col-6">Register</Tab>
                </TabList>

                <TabPanel className="login-reg-panel">
                    <label htmlFor="loginUsername">Username </label>
                    <input type="text" id="loginUsername" name="loginUsername" placeholder=" Username" onChange={this.handleChange} value={this.state.username} />
                    <br />
                    <label htmlFor="loginPass">Password </label>
                    <input type="password" id="loginPass" name="loginPass" placeholder=" Password" onChange={this.handleChange} onKeyUp={this.keyUpHandler} value={this.state.pass} />
                    <br />
                    <input type="button" className="btn btn-primary" onClick={this.logInHandler} value="Log In" />
                    <div className='alert'>{this.state.error.message}</div>
                </TabPanel>
                <TabPanel className="login-reg-panel">
                    <label htmlFor="registerName">Name </label>
                    <input type="text" id="registerName" name="registerName" placeholder=" Full Name" onChange={this.handleChange} value={this.state.registerName} />
                    <br />
                    <label htmlFor="registerEmail">Email </label>
                    <input type="email" id="registerEmail" name="registerEmail" placeholder=" Email Address" onChange={this.handleChange} value={this.state.registerEmail} />
                    <br />
                    <label htmlFor="registerUsername">Username </label>
                    <input type="text" id="registerUsername" name="registerUsername" placeholder=" Username" onChange={this.handleChange} value={this.state.username} />
                    <br />
                    <label htmlFor="registerPass">Password </label>
                    <input type="password" id="registerPass" name="registerPass" placeholder=" Min 6 characters" onChange={this.handleChange} value={this.state.pass} />
                    <br />
                    <input type="button" className="btn btn-primary" onClick={this.registerHandler} value="Register" />
                    <div className='alert'>{this.state.error.message}{this.state.passLengthError}</div>
                </TabPanel>
            </Tabs >
        )
    }
}
