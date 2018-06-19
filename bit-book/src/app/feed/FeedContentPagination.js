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

    const numberOfPage = Math.ceil(props.posts / 5)

    return (
        <div className="feed-content">
            {(props.posts === 0) ? <NothingInFeed /> :
                (props.pagPosts.map((post, i) => {
                    if (post.type === "text") {
                        return <TextPost post={post} refreshFeed={props.refreshFeed} key={i} />;
                    }
                    if (post.type === "image") {
                        return <ImagePost post={post} refreshFeed={props.refreshFeed} key={i} onClick={props.imgClickhandler} />;
                    }
                    if (post.type === "video") {
                        return <VideoPost post={post} refreshFeed={props.refreshFeed} key={i} />;
                    }
                }))}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {(props.page === 0) ? "" : <li className="page-item">
                        <Link to={`/home/${props.page}`} className="page-link "> <span aria-hidden="true">&laquo;</span></Link>
                    </li>}
                    {
                        pageNumber(numberOfPage)
                    }
                    {(props.page === numberOfPage - 1) ? "" : <li className="page-item">
                        <Link to={`/home/${props.page + 2}`} className="page-link "> <span aria-hidden="true">&raquo;</span></Link>
                    </li>}

                </ul>
            </nav>


        </div>
    );
}