import { apiUrl } from '../shared/constants'
import User from '../entities/User'

class PeopleService {

    fetchPeopleData() {
        return fetch(`${apiUrl}/users`).then(response => {
            return response.json()
        }).then(data => {
            return data.map(user => {
                let splited = user.lastPost.split('T')
                let lastTime = splited[1].split(':')
                let postLast = `${lastTime[0]}:${lastTime[1]}`
                return new User(user.avatarUrl, user.aboutShort, user.name, user.userId, postLast)
            })
        })

    }

}

export default new PeopleService();