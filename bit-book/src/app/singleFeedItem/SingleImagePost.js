import React from 'react';

export const SingleImagePost = (props) => {

    return (
        <div className="single-post">
            <div className="post-content">
                <img src={props.post.imageUrl} alt={"image" + props.post.userId} />
            </div>
        </div>
    );
}