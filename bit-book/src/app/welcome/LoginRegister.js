import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


export const LoginRegister = (props) => {


<<<<<<< HEAD
    const handleChange = event => {
        props.setInputValues(event)
    };


    return (
        <Tabs className="container tabs">
            <TabList className="row tabList" >
                <Tab className="col-6">Log In</Tab>
=======

    return (

        <Tabs className="container tabs">
            <TabList className="row tabList" >
                <Tab className="col-6">Login</Tab>
>>>>>>> 014c9da8367ca1551e5be877bff31fc47c42bb95
                <Tab className="col-6">Register</Tab>
            </TabList>

            <TabPanel>
                <div className="loginReg">
                    <label for="loginEmail">email </label>
<<<<<<< HEAD
                    <input type="email" id="loginEmail" name="loginEmail" placeholder=" Email Address" onChange={handleChange} />
                    <br />
                    <label for="loginPass">password </label>
                    <input type="password" id="loginPass" name="loginPass" placeholder=" Password" onChange={handleChange} />
                    <br />
                    <button type="button" class="btn btn-outline-primary">Log In</button>
=======
                    <input type="email" id="loginEmail" name="loginEmail" placeholder="Email Address" />
                    <br />
                    <label for="loginPass">password </label>
                    <input type="password" id="loginPass" name="loginPass" placeholder="Password" />
                    <br />
                    <button type="button" class="btn btn-primary">Login</button>
>>>>>>> 014c9da8367ca1551e5be877bff31fc47c42bb95
                </div>
            </TabPanel>
            <TabPanel>
                <label for="registerName">Name </label>
<<<<<<< HEAD
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
=======
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

>>>>>>> 014c9da8367ca1551e5be877bff31fc47c42bb95
    )
}
