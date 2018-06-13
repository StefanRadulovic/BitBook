import React from 'react';
import { PostFooter } from './PostFooter';
import { PostAuthor } from '../partials/PostAuthor';

export const TextPost = (props) => {

    return (
            <div className="post">
                <PostAuthor post={props.post} />
                <div className="post-content">
                    <p>{props.post.text}</p>
                </div>
                <PostFooter numberOfComments={props.post.commentsNum} type={props.post.type} id={props.post.id} />
            </div>
    );
}