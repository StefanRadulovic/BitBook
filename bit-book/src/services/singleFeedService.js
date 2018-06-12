import { apiUrl, apiKey, sessionId } from '../shared/constants';

class SingleFeedService {

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
        })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
}

export default new SingleFeedService();