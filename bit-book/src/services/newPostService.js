import { apiUrl, apiKey, sessionId } from '../shared/constants';

class newPostService {

<<<<<<< HEAD
<<<<<<< HEAD
    addNewTextPost(post) {
=======
    addNewPost(post) {
>>>>>>> Add new text post.
=======
    addNewTextPost(post) {
>>>>>>> Add image and video post.
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Add image and video post.

    addNewImagePost(imageUrl) {
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

        return fetch(apiUrl + 'VideoPosts', {
            method: 'POST',
            body: JSON.stringify({
                videoUrl: "https://www.youtube.com/embed/" + videoUrl.split("watch?v=")[1]
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
<<<<<<< HEAD
=======
>>>>>>> Add new text post.
=======
>>>>>>> Add image and video post.
}

export default new newPostService();