import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


export const LoginRegister = (props) => {


    const handleChange = event => {
        props.setInputValues(event)
    };


    return (
        <Tabs className="container tabs">
            <TabList className="row tabList" >
                <Tab className="col-6">Log In</Tab>
                <Tab className="col-6">Register</Tab>
            </TabList>

            <TabPanel>
                <div className="loginReg">
                    <label for="loginEmail">email </label>
                    <input type="email" id="loginEmail" name="loginEmail" placeholder=" Email Address" onChange={handleChange} />
                    <br />
                    <label for="loginPass">password </label>
                    <input type="password" id="loginPass" name="loginPass" placeholder=" Password" onChange={handleChange} />
                    <br />
                    <button type="button" class="btn btn-outline-primary">Log In</button>
                </div>
            </TabPanel>
            <TabPanel>
                <label for="registerName">Name </label>
                <input type="text" id="registerName" name="registerName" placeholder=" Full Name" onChange={handleChange} />
                <br />
                <label for="registerEmail">email </label>
                <input type="email" id="registerEmail" name="registerEmail" placeholder=" Email Address" onChange={handleChange} />
                <br />
                <label for="registerPass">password </label>
                <input type="password" id="registerPass" name="registerPass" placeholder=" Min 6 characters" onChange={handleChange} />
                <br />
                <button type="button" class="btn btn-outline-primary">Register</button>
            </TabPanel>
        </Tabs >
    )
}
