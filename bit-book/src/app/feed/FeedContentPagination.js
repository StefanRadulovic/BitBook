import React from 'react';
import { NothingInFeed } from './NothingInFeed';
import { TextPost } from './TextPost';
import { ImagePost } from './ImagePost';
import { VideoPost } from './VideoPost';
import { Link } from 'react-router-dom'


const pageNumber = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array[i] = i
    }
    return array.map((page, i) => {
        return <Link to={`/home/${i + 1}`} key={i}><li className="page-item page-link" >{i + 1}</li></Link>

    })
}
export const FeedContent = (props) => {

    const numberOfPage = Math.ceil(props.posts.length / 5)
    return (
        <div className="feed-content">
            {props.posts.length === 0 ? <NothingInFeed /> :
                (props.pagPosts.map((post, i) => {
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {
                        pageNumber(numberOfPage)
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>

                </ul>
            </nav>

            {/* <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav> */}
        </div>
    );
}