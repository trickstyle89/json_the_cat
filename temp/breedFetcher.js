const request = require('request');
const args = process.argv.slice(2);

const fetchBreedDescription = function(args) {
  const breed = args;
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, desc, body) => {
      if (error) {
      console.log(error);
     } else {
      let data = JSON.parse(body);
      if (data.length === 0) {
        console.log('no data found');
      } else {
        console.log('body:', data); // Print the HTML for the Google homepage
      }
    }
  });
};
fetchBreedDescription(args);

module.exports = { fetchBreedDescription };