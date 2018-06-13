import React from 'react';
import { Comments } from './Comments';

export const SingleVideoPost = (props) => {

    return (
        <div className="single-post-post">
            <div className="post-content">
                <iframe width="560" height="315" src={props.post.videoUrl + "?rel=0"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <Comments comments={props.comments} />
        </div>
    );
}