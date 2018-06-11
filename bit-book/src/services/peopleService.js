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
                let lastPost = `${lastTime[0]}:${lastPost[1]}`
                return new User(user.avatarUrl, user.aboutShort, user.name, user.userId, lastPost)
            })
        })

    }

}

export default new PeopleService();