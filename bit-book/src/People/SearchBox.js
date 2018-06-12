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
            <div className='container'>
<<<<<<< HEAD
                <div className='col-12'>
                    <i className="fa fa-search"></i> <input type='text' className='col-11' value={this.state.inputText} onChange={this.inputHandler} placeholder='Search users' />
                </div>
=======
                <i className="fa fa-search"></i> <input type='text' className='col-11' value={this.state.inputText} onChange={this.inputHandler} placeholder='Search users' />
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
            </div>
        )
    }
}
export default SearchBox;