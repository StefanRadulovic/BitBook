import React from 'react';
import { PostFooter } from './PostFooter';
import { PostAuthor } from '../partials/PostAuthor';

export const VideoPost = (props) => {

    return (
        <div className="post">
            <PostAuthor post={props.post} refreshFeed={props.refreshFeed} />
            <div className="post-content">
                <iframe width="560" height="315" src={props.post.videoUrl + "?rel=0"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
            </div>
            <PostFooter numberOfComments={props.post.commentsNum} type={props.post.type} id={props.post.id} />
        </div>
    );
}