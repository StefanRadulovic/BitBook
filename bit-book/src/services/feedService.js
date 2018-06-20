import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class FeedService {

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
                return data;
            });
    }
}

export default new FeedService();