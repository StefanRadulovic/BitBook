import React, { Component, Fragment } from 'react'



class UploadPicture extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div classname="upload-img">
                <h2> Upload photo</h2 >
                <label htmlFor='input-new-url'>Add url   </label>
                <input type='text' id='input-new-url' />
                <br />
                <input type='button' value='upload URL' />

            </div>
        )
    }
}
export default UploadPicture