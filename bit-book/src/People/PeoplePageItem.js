import React from 'react';
import { Link } from 'react-router-dom'

const PeoplePageItem = (props) => {
    console.log(props.user.id);

    return (
        <div className="people-page-item">
            <div className="user-image">
                <img src={props.user.img} className='people-img' />
            </div>
            <div className="user-info">
                <h5><Link to={"/people/" + props.user.id}>{props.user.name}</Link></h5>
                <span>{props.user.aboutShort}</span>
            </div>
            <div className="last-post">Last post:
                <p>{props.user.lastPost}</p>
            </div>
        </div>
    )
}

export default PeoplePageItem;