import { apiUrl, apiKey } from '../shared/constants'

class AuthentificationService {

    logIn(logInObj) {
        console.log(logInObj);

        return fetch(`${apiUrl}login`, {
            'method': 'POST',
            'headers': {
                'key': apiKey,
                'Content-Type': 'application/json'

            },
            'body': JSON.stringify(logInObj)
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                response.json().then(data => {
                    throw new Error(data.message)
                })
            }
        }).then(data => {
            console.log(data);

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
                'apiKey': apiKey,

            },
            'body': registerObj
        })

    }


}

export default new AuthentificationService();