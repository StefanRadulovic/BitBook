import { apiUrl, apiKey, getOutHeader } from '../shared/constants';
class deletePostService {

    deletePost(postId) {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'Posts/' + postId, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Key': apiKey,
                'SessionId': sessionId
            }
        })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
}

export default new deletePostService();