import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class InfiniteFeedService {

<<<<<<< HEAD
    getPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$top=5&$skip=${pageNumber}`, {
=======
    getPosts() {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'Posts/', {
>>>>>>> infiniti scroll started
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
<<<<<<< HEAD
                'SessionId': sessionId,
            }
        }).then(response => {
            return response.json()
        })
=======
                'SessionId': sessionId
            }
        }).then(response => {
            console.log('res'+response);
            
           return response.json()})
>>>>>>> infiniti scroll started
            .then(data => {
                return data
            });
    }
}

export default new InfiniteFeedService();