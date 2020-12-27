const fetchCountries = function (searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name';
  return fetch(`${url}/${searchQuery}`).then(res => res.json());
};
export default fetchCountries;
