import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class InfiniteFeedService {

    getPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$top=5&$skip=${pageNumber}`, {
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