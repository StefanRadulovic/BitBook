import React from 'react';
import { NothingInFeed } from './NothingInFeed';
import { ImagePost } from './ImagePost';

export const FilterImages = (props) => {

    return (
        <div className="feed-content">
            {props.posts.length === 0 ? <NothingInFeed /> :
                (props.posts.map((post, i) => {
                    if (post.type === "image") {
                        return <ImagePost post={post} key={i} />;
                    }
                }))}
        </div>
    );
}