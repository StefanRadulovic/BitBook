import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class PaginationFeedService {

    getPostsNumber() {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}posts/count`, {
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

        return fetch(`${apiUrl}Posts?$orderby=DateCreated desc&$top=5&$skip=${pageNumber * 5}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => {


            return response.json()
        })
            .then(data => {


                return data
            });
    }
}

export default new PaginationFeedService();