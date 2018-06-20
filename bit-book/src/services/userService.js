import { apiUrl, apiKey, getOutHeader } from '../shared/constants';
import User from '../entities/User';
import { capitalize, formatedDate } from '../shared/utils';



class UserService {

    getMyProfile() {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}/profile`, {
            headers: {
                'Key': apiKey,
                'SessionId': sessionId
            }
        })
            .then(response => response.json())

    }
    getUserProfile(id) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}/users/${id}`, {
            headers: {
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => {
            return response.json()
        })
    }
    updateProfile(profileObj) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Profiles`, {
            'method': 'PUT',
            'headers': {
                'Key': apiKey,
                'SessionId': sessionId,
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(profileObj)
        }).then(response => {

            if (!response.ok) {

                return response.json().then((error) => {
                    throw new Error(error.message)
                })
            } else {
                return ''
            }
        });

    }
    uploadImage(formData) {
        const sessionId = getOutHeader()
        return fetch(`${apiUrl}upload`,
            {
                'method': 'POST',
                'headers': {
                    'Key': apiKey,
                    'SessionId': sessionId,

                },
                'body': formData
            }).then(response => response.json())
            .then(data => {
                return data
            })
    }

    fetchPeopleData() {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}users`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            return data.map(user => {
                let postLast;
                if (user.lastPostDate !== null) {
                    let splited = user.lastPostDate.split('T')
                    let lastTime = splited[1].split(':')
                    if (new Date(user.lastPostDate).toDateString() === new Date().toDateString()) {
                        postLast = `${lastTime[0]}:${lastTime[1]}`
                    } else {
                        let date = formatedDate(splited[0]);
                        postLast = `${date} ${lastTime[0]}:${lastTime[1]}`
                    }
                } else {
                    postLast = 'No post!'
                }
                if (!user.avatarUrl) {
                    let imgUrl = 'http://livetestbed3.squaregrowth.com/core-content/uploads/2017/04/Placeholder-human-1.png';
                    return new User(imgUrl, user.aboutShort, capitalize(user.name), user.id, postLast)
                }
                return new User(user.avatarUrl, user.aboutShort, capitalize(user.name), user.id, postLast)
            })
        })

    }



}

export default new UserService();

