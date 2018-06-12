import React from 'react';
import { PostFooter } from './PostFooter';

export const VideoPost = (props) => {

    return (
            <div className="post">
                <div className="post-content">
                    <iframe width="560" height="315" src={props.post.videoUrl + "?rel=0"} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <PostFooter numberOfComments={props.post.commentsNum} type={props.post.type} id={props.post.id} />
            </div>
    );
}