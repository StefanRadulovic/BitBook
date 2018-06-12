import React from 'react';
import { NothingInFeed } from './NothingInFeed';
import { TextPost } from './TextPost';
import { ImagePost } from './ImagePost';
import { VideoPost } from './VideoPost';

export const FeedContent = (props) => {

    return (
        <div className="feed-content">
            {props.posts.length === 0 ? <NothingInFeed /> :
                (props.posts.map((post, i) => {
                    if (post.type === "text") {
                        return <TextPost post={post} key={i} />;
                    }
                    if (post.type === "image") {
                        return <ImagePost post={post} key={i} />;
                    }
                    if (post.type === "video") {
                        return <VideoPost post={post} key={i} />;
                    }
                }))}
        </div>
    );
}