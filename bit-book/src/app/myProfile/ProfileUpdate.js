import React, { Fragment, Component } from 'react'

class ProfileUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameText: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(event) {
        this.setState({
            nameText: event.target.value
        })
        this.props.update(event.target.value)
    }

    render() {
        let alertClass = 'col-7 update-profile-img-name';
        if (this.state.nameText.length > 30) {
            alertClass = 'col-7 alert update-profile-img-name'
        }
        return (
            <Fragment>
                <div className='row'>
                    <div className='col-4 update-profile-img-name'>
                        <img src='http://www.btisolutions.com/v2/wp-content/uploads/2016/07/ef3-placeholder-image-470x430.jpg' id="update-img" />
                        <input type='button' value='UPLOAD PHOTO' />
                    </div>
                    <div className={alertClass}>
                        <label htmlFor='inputFullName'>Name</label>
                        <br />
                        <input type='text' id='inputFullName' value={this.state.nameText} onChange={this.onChangeHandler} />
                        <br />
                        <span id="letter-counter">{this.state.nameText.length}/30</span>
                    </div>
                </div>
                <div>
                    <input className="btn btn-light updateProfileButton" type='button' value='CLOSE' />
                    <input className="btn btn-light updateProfileButton" type='button' value='SAVE' />
                </div>
            </Fragment>
        )
    }
}
export default ProfileUpdate