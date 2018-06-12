import React from 'react';
import { Link } from 'react-router-dom'


const PeoplePageItem = (props) => {

    return (

<<<<<<< HEAD
        <div className="user row col-12">
            <div className="col-1">
                <img src={props.user.img} className='people-img' />
            </div>
            <div className="col-9">
                <h5><Link to={"/singleUser/" + props.user.id}>{props.user.name}</Link></h5>
                <span>{props.user.aboutShort}</span>
            </div>
            <div className="col-2">Last post:
                <p>{props.user.lastPost}</p>
=======
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
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
            </div>

        </div>

    )

}

export default PeoplePageItem;