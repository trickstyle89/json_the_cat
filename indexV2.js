const { fetchBreedDescription } = require('./breedFetcher2');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    let data = JSON.parse(`"${desc}"`);
    console.log(data);
    }
});