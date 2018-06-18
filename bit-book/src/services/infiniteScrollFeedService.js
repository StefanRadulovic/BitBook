import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class InfiniteFeedService {

<<<<<<< HEAD
<<<<<<< HEAD
    getPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$top=5&$skip=${pageNumber}`, {
=======
    getPosts() {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'Posts/', {
>>>>>>> infiniti scroll started
=======
    getPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$top=5&$skip=${pageNumber}`, {
>>>>>>> scroll event does not work
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
<<<<<<< HEAD
<<<<<<< HEAD
                'SessionId': sessionId,
            }
        }).then(response => {
            return response.json()
        })
=======
                'SessionId': sessionId
=======
                'SessionId': sessionId,
<<<<<<< HEAD
                "Content-Size":4  // mozda da se ovde ubaci strana koliko postova ima
>>>>>>> infinite scroll
            }
        }).then(response => {
            console.log('res'+response);
            
           return response.json()})
>>>>>>> infiniti scroll started
=======
            }
        }).then(response => {
            return response.json()
        })
>>>>>>> scroll event does not work
            .then(data => {
                return data
            });
    }
}

export default new InfiniteFeedService();