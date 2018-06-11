import React, { Component, Fragment } from 'react'
import peopleService from '../services/peopleService'


class PeoplePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people=[]
        }

    }


    componentDidMount() {
        peopleService.fetchPeopleData().then(people => {
            console.log(people);

            this.setState({
                people: people
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Search />

            </Fragment>
        )
    }

}