import React from 'react';
import { PostFooter } from './PostFooter';

export const TextPost = (props) => {

    return (
            <div className="post">
                <div className="post-content">
                    <p>{props.post.text}</p>
                </div>
                <PostFooter numberOfComments={props.post.commentsNum} type={props.post.type} id={props.post.id} />
            </div>
    );
}