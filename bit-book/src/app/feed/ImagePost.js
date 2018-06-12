import React from 'react';
import { PostFooter } from './PostFooter';

export const ImagePost = (props) => {

    return (
            <div className="post">
                <div className="post-content">
                    <img src={props.post.imageUrl} alt={"image" + props.post.userId} />
                </div>
               <PostFooter numberOfComments={props.post.commentsNum} type={props.post.type} id={props.post.id} /> 
            </div>
    );
}