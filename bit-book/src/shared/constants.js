export const apiUrl = 'http://bitbookapi.azurewebsites.net/api/';

// export const apiKey = 'bitbookdev';
export const apiKey = 'DB2F506';

export const getOutHeader = () => {
    const login = localStorage.getItem('logIn');

    return JSON.parse(login).sessionId;


}
