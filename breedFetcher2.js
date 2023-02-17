const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, desc, body) => {
    if (error) {
      callback(error, null);
    } else {
      let data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, 'No data found');
      } else {
        callback(null, data[0].description.trim());
      }
    }
  });
};

module.exports = { fetchBreedDescription };