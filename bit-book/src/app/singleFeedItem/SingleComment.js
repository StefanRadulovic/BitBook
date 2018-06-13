import React from 'react';


export const SingleComment = (props) => {

    return (
        <div className="single-comment">
            {/* <img src="" alt="" /> */}
            <div className="comment-content">{props.comment.body}</div>
        </div>
    );
}