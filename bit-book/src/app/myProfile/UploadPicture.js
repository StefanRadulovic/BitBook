import React, { Component, Fragment } from 'react'



class UploadPicture extends Component {
    constructor(props) {
        super(props)
    }
    photoUrlHandler = (event) => {

        this.props.photoUrl(event.target.value)
    }

    render() {
        return (
            <div id="upload-img">
                <h2> Upload photo</h2 >
                <div>
                    <label htmlFor='input-new-url'>Add url   </label>
                    <input type='text' id='input-new-url' value={this.props.imgUrl} className='col-12' onChange={this.photoUrlHandler} />
                </div>
                <div>
                    <input type='button' value='Upload URL' className='btn btn-light upload-url-btn' onClick={this.props.upLoadUrl} />
                    <span className='alert'>{this.props.errorImgUrl}</span>
                </div>
                <input type="file" id="my_file" accept='image/*' className='btn btn-light' onChange={this.props.selectProfileImageHandler} />
                <div>
                    <input type='button' value='Upload File' className='btn btn-light upload-url-btn' onClick={this.props.uploadFileHandler} />
                </div>
                <input type='button' value="CLOSE" className='offset-9 btn btn-light upload-close-btn' onClick={this.props.close} />
            </div>
        )
    }
}
export default UploadPicture