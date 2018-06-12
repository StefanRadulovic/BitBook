import React, { Component } from 'react';
import apiUrl from '../../shared/constants';
import userService from '../../services/userService';
// import { Link } from 'react-router-dom';


class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }


    componentDidMount() {
        userService.getProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                })
            })
    }



    render() {
        return (
            <div className="container">
                <p>Lorem ipsum</p>
            </div>
        )
    }
}

export default MyProfilePage;