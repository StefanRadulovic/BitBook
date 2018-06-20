import { apiUrl, apiKey, getOutHeader } from '../shared/constants';
class PostService {

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

    getPagPosts(pageNumber) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Posts?$orderby=DateCreated desc&$top=5&$skip=${pageNumber * 5}`, {

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

    getPostByType(postId, type) {
        const sessionId = getOutHeader()
        let typeUrl = 'TextPosts/';

        if (type === 'image') {
            typeUrl = 'ImagePosts/';
        }

        if (type === 'video') {
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
        const sessionId = getOutHeader()

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
        const sessionId = getOutHeader()

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
    addNewTextPost(post) {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'TextPosts', {
            method: 'POST',
            body: JSON.stringify({
                text: post
            }),
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

    addNewImagePost(imageUrl) {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'ImagePosts', {
            method: 'POST',
            body: JSON.stringify({
                imageUrl: imageUrl
            }),
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

    addNewVideoPost(videoUrl) {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'VideoPosts', {
            method: 'POST',
            body: JSON.stringify({
                videoUrl: videoUrl
            }),
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
export default new PostService();




