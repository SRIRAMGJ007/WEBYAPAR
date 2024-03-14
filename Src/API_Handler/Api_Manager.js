const BASE_URL = 'https://test.webyaparsolutions.com/';

const ApiManager = (url, options) => {
  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(error.message);
    });
};

export default ApiManager;
