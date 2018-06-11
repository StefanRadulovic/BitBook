import React from 'react';
import { Link } from 'react-router-dom'


const PeoplePageItem = (props) => {

    return (

        <div className="post col-12">
            <div className="col-1">
                <img src={props.user.img} />
            </div>
            <div className="col-10">
                <h2><Link to={"/singleUser/" + props.user.id}>{props.user.name}</Link></h2>
                <span>{props.user.aboutShort}</span>
            </div>
            <div className="col-1">
                {props.user.lastPost}
            </div>

        </div>

    )

}

export default PeoplePageItem;