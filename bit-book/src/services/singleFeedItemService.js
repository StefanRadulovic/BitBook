import { apiUrl, apiKey, sessionId } from '../shared/constants';

class SingleFeedItemService {

    getPostByType(postId, type) {

        let typeUrl = 'TextPosts/';

        if (type == 'image') {
            typeUrl = 'ImagePosts/';
        }

        if (type == 'video') {
            typeUrl = 'VideoPosts/';
        }
        return fetch(apiUrl + typeUrl + postId, {
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

    getComments(postId) {
        return fetch(apiUrl + 'Comments?postId=' + postId, {
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

    addNewComment(comment, postId) {
        return fetch(apiUrl + 'Comments', {
            method: 'POST',
            body: JSON.stringify({
                body: comment,
                postId: postId
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

export default new SingleFeedItemService();