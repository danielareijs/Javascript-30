const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(res => res.json())
.then(data => cities.push(...data))

function filterSearch(input, cities){
  return cities.filter(city => {
    const regex = new RegExp(input, 'gi');
    return city.city.match(regex) || city.state.match(regex);
  })
}

function displayMatches(){
  const matches = filterSearch(this.value, cities);
  const regex = new RegExp(this.value, 'gi');
  const html = matches.map(match => {
    const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${match.population}</span>
      </li>`
  }).join('');
  suggestionsList.innerHTML = html;
}

const inputValue = document.querySelector('.search');
const suggestionsList = document.querySelector('.suggestions');

inputValue.addEventListener('keyup', displayMatches);