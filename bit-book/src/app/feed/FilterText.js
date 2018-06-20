import React from 'react';
import { NothingInFeed } from './NothingInFeed';
import { TextPost } from './TextPost';

export const FilterText = (props) => {

    return (
        <div className="feed-content">
            {props.posts.length === 0 ? <NothingInFeed /> :
                (props.posts.map((post, i) => {
                    if (post.type === "text") {
                        return <TextPost post={post} key={i} />;
                    }
                }))}
        </div>
    );
}

const res = FilterText({});