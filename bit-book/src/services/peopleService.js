import { apiUrl, apiKey, getOutHeader } from '../shared/constants';
import formatedDate from '../entities/formatedDate'
import User from '../entities/User';
import { capitalize } from '../entities/capitalize';


class PeopleService {

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
                let splited = user.lastPostDate.split('T')
                let lastTime = splited[1].split(':')
                let postLast;
                if (new Date(user.lastPostDate).toDateString() == new Date().toDateString()) {
                    postLast = `${lastTime[0]}:${lastTime[1]}`
                } else {
                    let date = formatedDate(splited[0]);
                    postLast = `${date} ${lastTime[0]}:${lastTime[1]}`

                }
                if (!user.avatarUrl) {
                    let imgUrl = 'http://livetestbed3.squaregrowth.com/core-content/uploads/2017/04/Placeholder-human-1.png';
                    return new User(imgUrl, user.aboutShort, capitalize(user.name), user.id, postLast)

                }


                return new User(user.avatarUrl, user.aboutShort, capitalize(user.name), user.id, postLast)
            })
        })

    }

    fetchSingleUserData = (id) => {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            return data
        })
    }
}

export default new PeopleService();