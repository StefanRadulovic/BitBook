import React from 'react';
import feedService from '../../services/feedService';
import { TextPost } from './TextPost';
import { ImagePost } from './ImagePost';
import { VideoPost } from './VideoPost';
import { LoadingScreen } from '../partials/LoadingScreen';
import { NothingInFeed } from './NothingInFeed';

export default class Feed extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: null
        }
    }

    loadPosts = () => {

        feedService.getPosts().then(data => {
            this.setState({
                posts: data
            });
            console.log(data);
            data.map((post, i) => {                
                feedService.getPostByType(post.id, post.type).then(imageData => {
                    console.log(imageData);
                });                
            });
        });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render () {
        return this.state.posts === null ? <LoadingScreen /> : (
            <div className="feed-content">
                {this.state.posts.length === 0 ? <NothingInFeed /> : 
                (this.state.posts.map((post, i) => {
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
}