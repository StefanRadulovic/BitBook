import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class ProfileService {

    getMyProfile() {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}/profile`, {
            headers: {
                'Key': apiKey,
                'SessionId': sessionId
            }
        })
            .then(response => response.json())

    }
    getUserProfile(id) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}/users/${id}`, {
            headers: {
                'Key': apiKey,
                'SessionId': sessionId
            }
        }).then(response => {
            return response.json()
        })
    }
    updateProfile(profileObj) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}Profiles`, {
            'method': 'PUT',
            'headers': {
                'Key': apiKey,
                'SessionId': sessionId,
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(profileObj)
        }).then(response => {

            if (!response.ok) {

                return response.json().then((error) => {
                    throw new Error(error.message)
                })
            } else {
                return ''
            }
        });

    }
    uploadImage(formData) {
        const sessionId = getOutHeader()

        return fetch(`${apiUrl}upload`,
            {
                'method': 'POST',
                'headers': {
                    'Key': apiKey,
                    'SessionId': sessionId,

                },
                'body': formData
            }).then(response => response.json())
            .then(data => {
                return data
            })
    }
}

export default new ProfileService();