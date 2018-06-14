import { apiUrl, apiKey, sessionId } from '../shared/constants'

class AuthentificationService {

    logIn(logInObj) {
        return fetch(`${apiUrl}login`, {
            'method': 'POST',
            'headers': {
                'apiKey': apiKey,
                'sessionId': sessionId
            },
            'body': logInObj
        }).then
        // (vrati user obj koji ima sve u sebi, stavi u lokal storage, napavi logout)

    }

    register(registerObj) {
        return fetch(`${apiUrl}register`, {
            'method': 'POST',
            'headers': {
                'apiKey': apiKey,
                'sessionId': sessionId
            },
            'body': registerObj
        })

    }


}

export default new AuthentificationService();