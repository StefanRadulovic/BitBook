import React from 'react';
import { Link } from 'react-router-dom'


const PeoplePageItem = (props) => {

    return (

        <div className="user row col-12">
            <div className="col-1">
                <img src={props.user.img} className='people-img' />
            </div>
            <div className="col-9">
                <h5><Link to={"/people/" + props.user.id}>{props.user.name}</Link></h5>
                <span>{props.user.aboutShort}</span>
            </div>
            <div className="col-2">Last post:
                <p>{props.user.lastPost}</p>
            </div>

        </div>

    )

}

export default PeoplePageItem;