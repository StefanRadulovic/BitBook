import { apiUrl, apiKey, sessionId } from '../shared/constants';

class DataService {
    constructor () {
        this.data = {
            posts: []
        };
    }

    getPosts() {
        return fetch(apiUrl + 'Posts/', {
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

    // addNewPost(postTitle, postBody, userId) {
    //     return fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: postTitle,
    //             body: postBody,
    //             userId: userId
    //         }),
    //         headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         return data;
    //     });
    // }
}

export default new DataService();