import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


export const LoginRegister = (props) => {



    return (

        <Tabs className="container tabs">
            <TabList className="row tabList" >
                <Tab className="col-6">Login</Tab>
                <Tab className="col-6">Register</Tab>
            </TabList>

            <TabPanel>
                <div className="loginReg">
                    <label for="loginEmail">email </label>
                    <input type="email" id="loginEmail" name="loginEmail" placeholder="Email Address" />
                    <br />
                    <label for="loginPass">password </label>
                    <input type="password" id="loginPass" name="loginPass" placeholder="Password" />
                    <br />
                    <button type="button" class="btn btn-primary">Login</button>
                </div>
            </TabPanel>
            <TabPanel>
                <label for="registerName">Name </label>
                <input type="text" id="registerName" name="registerName" placeholder="Full Name" />
                <br />
                <label for="registerEmail">email </label>
                <input type="email" id="registerEmail" name="registerEmail" placeholder="Email Address" />
                <br />
                <label for="registerPass">password </label>
                <input type="password" id="registerPass" name="registerPass" placeholder="Min 6 characters" />
                <br />
                <button>Register</button>
            </TabPanel>
        </Tabs >

    )
}
