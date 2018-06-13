import React, { Component } from 'react';
import LoginRegister from './LoginRegister';
import { Tabs, Tab, TabList, TabLink, Icon } from "bloomer";


class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Welcome to BitBook</h3>
                        <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sit magnam incidunt placeat, inventore sapiente fugit quis voluptates. Facere corporis blanditiis doloribus corrupti mollitia doloremque quae ullam, quidem temporibus quod!</p>
                    </div>
                    <div className='col-6'>
                        <LoginRegister />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;