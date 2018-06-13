import React, { Fragment, Component } from 'react'

class ProfileUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameText: '',
            aboutText: '',



        }
        this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
        this.onChangeAboutHandler = this.onChangeAboutHandler.bind(this)
    }

    onChangeNameHandler(event) {
        this.setState({
            nameText: event.target.value
        })
        this.props.updateName(event.target.value)
    }
    onChangeAboutHandler(event) {
        this.setState({
            aboutText: event.target.value
        })
        this.props.updateAbout(event.target.value)
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
                        {(!this.props.imgUrl) ? <img src='http://www.btisolutions.com/v2/wp-content/uploads/2016/07/ef3-placeholder-image-470x430.jpg' className="offset-1 col-10" id="update-img" /> :
                            <img src={this.props.imgUrl} className="offset-1 col-10" id="update-img" />}
                        <input type='button' className="btn btn-light upload-img-btn" value='UPLOAD PHOTO' onClick={this.props.openSecondModal} />
                    </div>
                    <div className={alertClass}>
                        <label htmlFor='inputFullName'>Name</label>
                        <br />
                        <input type='text' id='inputFullName' className='col-12' value={this.state.nameText} onChange={this.onChangeNameHandler} />
                        <br />
                        <span id="letter-counter">{this.state.nameText.length}/30</span>
                    </div>
                </div>
                <textarea name="aboutUser" id="aboutUser-update" className='col-12' rows="4" onChange={this.onChangeAboutHandler} value={this.state.aboutText}></textarea>
                <div className="update-profile-error">{this.props.error}</div>
                <div>
                    <input className="btn btn-light updateProfileButton" type='button' value='CLOSE' onClick={this.props.onCloseClickHandler} />
                    <input className="btn btn-light updateProfileButton" type='button' value='SAVE' onClick={this.props.onSaveHandler} />
                </div>
            </Fragment >
        )
    }
}
export default ProfileUpdate