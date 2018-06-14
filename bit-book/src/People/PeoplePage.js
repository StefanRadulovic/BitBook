import React, { Component, Fragment } from 'react'
import peopleService from '../services/peopleService'
import PeoplePageItem from './PeoplePageItem'
import SearchBox from './SearchBox'


class PeoplePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [],
            searchString: ''
        }
        this.search = this.search.bind(this);
        this.filterUserList = this.filterUserList.bind(this)
    }


    componentDidMount() {
        peopleService.fetchPeopleData().then(people => {


            this.setState({
                people: people
            })
        })
    }

    search(data) {
        this.setState({
            searchString: data
        });
    }

    filterUserList(element) {

        let name = (element.name).toLowerCase()
        let searchInputData = ((this.state.searchString) ? (this.state.searchString).toLowerCase() : '')
        if (!this.state.searchString || this.state.searchString.length === 0) { return true; }
        return name.includes(searchInputData)
    }

    render() {
        return (
            <div className="container">
                <div className="row people">
                    <SearchBox search={this.search} />
                    {(this.state.people.filter(this.filterUserList).length == 0) ? '' : this.state.people.filter(this.filterUserList).map((user, i) => {

                        return <PeoplePageItem key={i} user={user} />
                    })}
                </div>

            </div>
        )
    }

}

export default PeoplePage;

