import React from 'react';
import { Comments } from './Comments';

export const SingleTextPost = (props) => {

    return (
        <div className="single-post">
            <div className="post-content">
                <p>{props.post.text}</p>
            </div>
            <Comments comments={props.comments} />
        </div>
    );
}