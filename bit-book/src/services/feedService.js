import { apiUrl, apiKey, sessionId } from '../shared/constants';

class FeedService {

    getPosts() {
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

    addNewPost(userId, userName, postBody, type, dateCreated) {
        return fetch(apiUrl + 'Comments', {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                userName: userName,
                body: postBody,
                type: type,
                dateCreated: dateCreated
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => response.json())
            .then(data => {
                return data
            });
    }
}

export default new FeedService();