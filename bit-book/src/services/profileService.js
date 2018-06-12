// import Profile from '../entities/Profile'
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
        // .then(data => {
        // })
    }
}

export default new ProfileService();