import React from 'react';
import { NothingInFeed } from './NothingInFeed';
import { VideoPost } from './VideoPost';

export const FilterVideos = (props) => {

    return (
        <div className="feed-content">
            {props.posts.length === 0 ? <NothingInFeed /> :
                (props.posts.map((post, i) => {
                    if (post.type === "video") {
                        return <VideoPost post={post} key={i} />;
                    }
                }))}
        </div>
    );
}