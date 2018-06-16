import { apiUrl, apiKey } from '../shared/constants'

class AuthenticationService {

    logIn(logInObj) {

        return fetch(`${apiUrl}login`, {
            'method': 'POST',
            'headers': {
                'Key': apiKey,
                'Content-Type': 'application/json'

            },
            'body': JSON.stringify(logInObj)
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then(data => {
                    console.log(data.error);

                    throw new Error(data.error.message)
                })
            }
        }).then(data => {
            localStorage.setItem('logIn', JSON.stringify(data));
        }).catch(err => {
            throw err
        })
        // (vrati user obj koji ima sve u sebi, stavi u lokal storage, napavi logout)

    }

    register(registerObj) {
        return fetch(`${apiUrl}register`, {
            'method': 'POST',
            'headers': {
                'Key': apiKey,
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(registerObj)
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then(data => {
                    console.log(data.error);

                    throw new Error(data.error.message)
                })
            }
        }).catch(err => {
            throw err
        })

    }


}

export default new AuthenticationService();