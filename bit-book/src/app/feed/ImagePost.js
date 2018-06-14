import React from 'react';
import { PostFooter } from './PostFooter';
import { PostAuthor } from '../partials/PostAuthor';

export const ImagePost = (props) => {

    return (
        <div className="post">
            <PostAuthor post={props.post} refreshFeed={props.refreshFeed} />
            <div className="post-content">
                <img src={props.post.imageUrl} alt={"image" + props.post.userId} />
            </div>
            <PostFooter numberOfComments={props.post.commentsNum} type={props.post.type} id={props.post.id} />
        </div>
    );
}