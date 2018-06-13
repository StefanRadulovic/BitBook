import React from 'react';
import SingleComment from './SingleComment';
import { NoComments } from './NoComments';

export const Comments = (props) => {

    return (
        <div className="feed-item-comments">
            <div className="add-comment">
                <input type="text" placeholder="Add your comment" />
                <div className="send-comment">Send</div>
            </div>
            {props.comments.length === 0 ? <NoComments /> :
                (props.comments.map((comment, i) => {
                    return <SingleComment comment={comment} key={i} />
                }))}
        </div>
    );
}