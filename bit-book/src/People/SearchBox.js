import React, { Component } from 'react';


class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(event) {
        this.setState({
            inputText: event.target.value
        })
        this.props.search(event.target.value);
    }
    render() {
        return (
            <div className='search-box'>
                <i className="fa fa-search"></i><input id="search-people" type='text' value={this.state.inputText} onChange={this.inputHandler} placeholder='Search users' />
            </div>
        )
    }
}
export default SearchBox;