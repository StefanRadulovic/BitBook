import React, { Component } from 'react';
import profileService from '../../services/profileService';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../shared/constants';


class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }


    componentDidMount() {
        profileService.getProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                })
            })
    }


    profileImage = () => {

        // if (this.state.profile.avatarUrl === undefined) {
        if (true) {
            return (
                <img className="profileImg" src="https://intellihr.com.au/wp-content/uploads/2017/06/avatar_placeholder_temporary.png" />
            )
        } else {
            return (
                <img className="profileImg" src={this.state.profile.avatarUrl} />
            )
        }
    }


    render() {
        let about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet enim consequatur, neque molestias beatae odit, dolores aut expedita mollitia eius quae minus fuga a saepe error ex quaerat? Mollitia.Eligendi nam earum natus eos. Vitae consequuntur, aliquid quis debitis pariatur laboriosam accusantium molestias officiis, soluta dolorem odio est hic. Porro illo aliquid suscipit dolorem veniam explicabo consequatur maiores non?        Dolorem ducimus possimus earum. Assumenda officiis velit mollitia ex qui at, dolores reiciendis doloremque earum perferendis hic sequi molestiae dolorum asperiores eaque inventore consequatur enim maiores optio reprehenderit magni quas.Veritatis architecto expedita ea ad unde quasi nostrum soluta repellat eaque, autem at error, ipsam in iure exercitationem facere asperiores, sapiente earum. Tenetur, tempore ad enim modi rerum mollitia dolorem?        Consequatur, natus atque. Vero consequatur cum dolore in incidunt excepturi magnam ipsa officiis delectus natus, doloribus non iure repudiandae quibusdam, impedit sint, neque omnis adipisci aut? Quos explicabo sed debitis?        Officiis vitae facilis exercitationem? Unde, voluptas excepturi harum ea quam porro dolorem doloremque, sed praesentium optio eveniet aperiam maxime deserunt! Corporis, eum maiores aut dolores repellendus velit quo saepe adipisci?'
        return (
            <div className="container profile">
                {this.profileImage()}
                <h1>{this.state.profile.name}</h1>
                <p><Link to='/*'>Edit profile</Link></p>
                {/* <p>{this.state.profile.about}</p> */}
                <p>{about}</p>

                <button type="button" className="btn btn-light">{this.state.profile.postsCount} posts</button>
                <button type="button" className="btn btn-light">{this.state.profile.commentsCount} comments</button>
            </div>
        )
    }
}

export default MyProfilePage;