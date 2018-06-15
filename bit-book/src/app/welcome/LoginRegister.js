import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export const LoginRegister = (props) => {


    const handleChange = event => {
        props.setInputValues(event);
    };


    return (
        <Tabs className="container tabs">
            <TabList className="row tabList" >
                <Tab className="col-6">Log In</Tab>
                <Tab className="col-6">Register</Tab>
            </TabList>

            <TabPanel>
                <div className="loginReg">
                    <label htmlFor="loginUsername">username </label>
                    <input type="text" id="loginUsername" name="loginUsername" placeholder=" Username" onChange={handleChange} value={props.username} />
                    <br />
                    <label htmlFor="loginPass">password </label>
                    <input type="password" id="loginPass" name="loginPass" placeholder=" Password" onChange={handleChange} onKeyUp={props.keyUpHandler} value={props.pass} />
                    <br />
                    <input type="button" className="btn btn-outline-primary" onClick={props.logInHandler} value="Log In" />
                    <div className='alert'>{props.error.message}</div>
                </div>
            </TabPanel>
            <TabPanel>
                <label htmlFor="registerName">Name </label>
                <input type="text" id="registerName" name="registerName" placeholder=" Full Name" onChange={handleChange} value={props.registerName} />
                <br />
                <label htmlFor="registerEmail">email </label>
                <input type="email" id="registerEmail" name="registerEmail" placeholder=" Email Address" onChange={handleChange} />
                <br />
                <label htmlFor="registerUsername">username </label>
                <input type="text" id="registerUsername" name="registerUsername" placeholder=" Username" onChange={handleChange} value={props.username} />
                <br />
                <label htmlFor="registerPass">password </label>
                <input type="password" id="registerPass" name="registerPass" placeholder=" Min 6 characters" onChange={handleChange} value={props.pass} />
                <br />
                <input type="button" className="btn btn-outline-primary" onClick={props.registerHandler} value="Register" />
                <div className='alert'>{props.error.message}</div>
            </TabPanel>
        </Tabs >
    )
}
