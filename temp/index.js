const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv.slice(2);

fetchBreedDescription(breed, (error, desc) => {
});