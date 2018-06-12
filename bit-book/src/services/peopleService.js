import { apiUrl } from '../shared/constants'
import User from '../entities/User'

class PeopleService {

    fetchPeopleData() {
        return fetch(`${apiUrl}/users`, {
            headers: {
                'Content-Type': 'application/json',
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            // console.log(data)
            return data.map(user => {
                console.log(user.lastPostDate)
                let userLastdate = '2018-06-12T19:13:44'
                let splited = user.lastPostDate.split('T')
                let lastTime = splited[1].split(':')
                let postLast;
                if (new Date(userLastdate).toDateString() == new Date().toDateString()) {
                    postLast = `${lastTime[0]}:${lastTime[1]}`
                } else {
                    postLast = `${lastTime[0]}:${lastTime[1]}`

                }

                if (true) {  // zameni uslov kad bude ok input sa apija
                    let imgUrl = 'http://livetestbed3.squaregrowth.com/core-content/uploads/2017/04/Placeholder-human-1.png';
                    return new User(imgUrl, user.aboutShort, user.name, user.id, postLast)

                }
                return new User(user.avatarUrl, user.aboutShort, user.name, user.userId, postLast)
            })
        })

    }

}

export default new PeopleService();