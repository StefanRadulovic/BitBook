import { apiUrl } from '../shared/constants';

class ProfileService {

    getProfile() {
        return fetch(`${apiUrl}/profile`, {
            headers: {
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        })
            .then(response => response.json())

    }

    updateProfile(profileObj) {
        return fetch(`${apiUrl}Profiles`, {
            'method': 'PUT',
            'headers': {
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(profileObj)
        }).then(response => {

            if (response.ok) {
                return response.json()
            } else {
                return response.json()
            }


        }).then(data => {
            return data
        }).catch(err => {

            throw err
        })

    }
    uploadImage(formData) {
        return fetch(`${apiUrl}upload`,
            {
                'method': 'POST',
                'headers': {
                    'Key': 'bitbookdev',
                    'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',

                },
                'body': formData
            }).then(response => response.json())
            .then(data => {
                return data
            })
    }
}

export default new ProfileService();