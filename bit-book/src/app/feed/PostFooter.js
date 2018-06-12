import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../entities/capitalize';

export const PostFooter = (props) => {

    return (
        <div className="post-footer">
            <div className="post-type">{capitalize(props.type)} post</div>
            <div className="post-comment-count">
                <Link to={"/post/" + props.type + "/" + props.id}>{props.numberOfComments} comments</Link>
            </div>
        </div>
    );
}


