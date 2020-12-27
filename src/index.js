import './scss/main.scss';
const debounce = require('lodash.debounce');
import makeList from './templates/countriesList.hbs';
import makeCountry from './templates/countryMake.hbs';
import fetchCountries from './js/fetchCountries';

const refs = {
  query: document.querySelector('#set-query'),
  list: document.querySelector('.countries'),
};

const getQuery = function (e) {
  e.preventDefault();
  fetchCountries(e.target.value).then(data => {
    if (data.length > 10) {
    }
    if (data.length > 1 && data.length < 10) {
      data.forEach(country => {
        console.log(country);
        refs.list.insertAdjacentHTML('afterbegin', makeList(country));
      });
    } else {
      console.log(data[0]);
      refs.list.insertAdjacentHTML('afterbegin', makeCountry(data[0]));
    }
  });
};

refs.query.addEventListener('input', debounce(getQuery, 500));
