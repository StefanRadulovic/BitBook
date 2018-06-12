import React, { Component, Fragment } from 'react'
import peopleService from '../services/peopleService'
<<<<<<< HEAD
import PeoplePageItem from './PeoplePageItem'
=======
import PeoplePageItem from'./PeoplePageItem'
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
import SearchBox from './SearchBox'


class PeoplePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
<<<<<<< HEAD
            people: [],
            searchString: ''
        }
        this.search = this.search.bind(this);
=======
            people:[],
            searchString:''
        }
        this.search=this.search.bind(this);
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
        this.filterUserList = this.filterUserList.bind(this)
    }


    componentDidMount() {
        peopleService.fetchPeopleData().then(people => {
            console.log(people);

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
<<<<<<< HEAD

        let name = (element.name).toLowerCase()
        let searchInputData = ((this.state.searchString) ? (this.state.searchString).toLowerCase() : '')
        if (!this.state.searchString || this.state.searchString.length === 0) { return true; }
=======
        let name=(element.name).toLowerCase()
        let searchInputData= (this.props.searchString).toLowerCase()
        if (!this.props.searchString || this.props.searchString.length === 0) { return true; }

>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
        return name.includes(searchInputData)
    }

    render() {
        return (
            <div className="container">
<<<<<<< HEAD
                <div className="row people">
                    <SearchBox search={this.search} />
                    {(this.state.people.filter(this.filterUserList).length == 0) ? '' : this.state.people.filter(this.filterUserList).map((user, i) => {
                        return <PeoplePageItem key={i} user={user} />
                    })}
=======
            <div className="row">
                <SearchBox search={this.search}/>
                {this.state.people.filter(this.filterUserList).map((user,i)=>{
                    return <PeoplePageItem  key={i }user={user}/>
                })}
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
                </div>

            </div>
        )
    }

}

export default PeoplePage;

