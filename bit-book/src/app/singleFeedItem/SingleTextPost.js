import React from 'react';

export const SingleTextPost = (props) => {

    return (
        <div className="single-post">
            <div className="post-content">
                <p>{props.post.text}</p>
            </div>
        </div>
    );
}