import { apiUrl, apiKey, getOutHeader } from '../shared/constants';

class InfiniteFeedService {

    getPosts() {
        const sessionId = getOutHeader()

        return fetch(apiUrl + 'Posts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Key': apiKey,
                'SessionId': sessionId,
                "Content-Size":4  // mozda da se ovde ubaci strana koliko postova ima
            }
        }).then(response => {
            console.log('res'+response);
            
           return response.json()})
            .then(data => {
                return data
            });
    }
}

export default new InfiniteFeedService();