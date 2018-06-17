import React from 'react';
import { NothingInFeed } from './NothingInFeed';
import { TextPost } from './TextPost';
import { ImagePost } from './ImagePost';
import { VideoPost } from './VideoPost';
import InfiniteScroll from 'react-infinite-scroller'

export const FeedContent = (props) => {

    return (
<<<<<<< HEAD
        <div className="feed-content" onScroll={(event) => { console.log(event) }} >
            {props.posts.length === 0 ? <NothingInFeed /> :
                (props.posts.map((post, i) => {
                    if (post.type === "text") {
                        return <TextPost post={post} refreshFeed={props.refreshFeed} key={i} />;
                    }
                    if (post.type === "image") {
                        return <ImagePost post={post} refreshFeed={props.refreshFeed} key={i} />;
                    }
                    if (post.type === "video") {
                        return <VideoPost post={post} refreshFeed={props.refreshFeed} key={i} />;
                    }
                }))}
=======
        <div className="feed-content">
            <InfiniteScroll
                pageStart={0}
                loadMore={props.loadPosts}
                hasMore={props.hasMoreItems}
                loader={<div>Loading ...</div>}>
                {props.posts.length === 0 ? <NothingInFeed /> :
                    (props.posts.map((post, i) => {
                        if (post.type === "text") {
                            return <TextPost post={post} refreshFeed={props.refreshFeed} key={i} />;
                        }
                        if (post.type === "image") {
                            return <ImagePost post={post} refreshFeed={props.refreshFeed} key={i} />;
                        }
                        if (post.type === "video") {
                            return <VideoPost post={post} refreshFeed={props.refreshFeed} key={i} />;
                        }
                    }))}
            </InfiniteScroll>
>>>>>>> infiniti scroll started
        </div>
    );
}