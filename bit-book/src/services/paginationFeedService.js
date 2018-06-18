import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class PaginationFeedService {

    getPosts() {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'Posts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => response.json())
            .then(data => {
                return data
            });
    }
    getPaginationPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$top=5&$skip=${pageNumber * 5}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => response.json())
            .then(data => {
                return data
            });
    }
}

export default new PaginationFeedService();