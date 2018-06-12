<<<<<<< HEAD
import { apiUrl, apiKey, sessionId } from '../shared/constants';
import formatedDate from '../entities/formatedDate'
import User from '../entities/User';
import { capitalize } from '../entities/capitalize';


=======
import { apiUrl } from '../shared/constants'
import User from '../entities/User'
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e

class PeopleService {

    fetchPeopleData() {
<<<<<<< HEAD
        return fetch(`${apiUrl}/users`, {
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
                let aboutShort = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nulla animi dignissimos corporis nostrum voluptatibus tenetur natus voluptatem obcaecati quidem eos iusto nesciunt, quo voluptates illo, excepturi aut nisi accusantium. Delectus debitis, quidem asperiores ut'
                if (true) {  // zameni uslov kad bude ok input sa apija
                    let imgUrl = 'http://livetestbed3.squaregrowth.com/core-content/uploads/2017/04/Placeholder-human-1.png';
                    return new User(imgUrl, aboutShort, capitalize(user.name), user.id, postLast)

                }
=======
        return fetch(`${apiUrl}/users`).then(response => {
            return response.json()
        }).then(data => {
            return data.map(user => {
                let splited = user.lastPost.split('T')
                let lastTime = splited[1].split(':')
                let postLast = `${lastTime[0]}:${lastTime[1]}`
>>>>>>> f9daf7476b880d14a5655ffcd4418e25bdcdb22e
                return new User(user.avatarUrl, user.aboutShort, user.name, user.userId, postLast)
            })
        })

    }

}

export default new PeopleService();