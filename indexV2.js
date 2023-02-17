const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    let data = JSON.parse(desc);
    if (data.length === 0) {
      console.log('no data found');
    } else {
      console.log('body:', data); // Print the HTML for the Google homepage
    }
  }
});