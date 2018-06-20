import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class InfiniteFeedService {

<<<<<<< HEAD

    getPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$orderby=DateCreated desc&$top=5&$skip=${pageNumber * 5}`, {
=======
    getPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$top=5&$skip=${pageNumber}`, {
>>>>>>> 0ba09da94dec67dda9a01031465a93e212fe504c
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId,
            }
        }).then(response => {
            return response.json()
        })
            .then(data => {
                return data
            });
    }
}

export default new InfiniteFeedService();