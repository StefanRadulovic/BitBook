export const apiUrl = 'http://bitbookapi.azurewebsites.net/api/';

// export const apiKey = 'bitbookdev';
export const apiKey = 'DB2F506';


const login = localStorage.getItem('logIn')
export const sessionId = JSON.parse(login).sessionId;

