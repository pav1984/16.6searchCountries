var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);

}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        var ol = document.querySelector('ol');
        ol.appendChild(liEl);
        liEl.innerHTML = `<strong>Country:</strong> ${item.name};  <strong>Capital:</strong> ${item.capital};   <strong>Currencies:</strong> ${item.currencies};<br><br>`;
        countriesList.appendChild(liEl);
    });
}

document.getElementById('search').addEventListener('click', searchCountries);

var input = document.getElementById("country-name");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        searchCountries();
    }
});