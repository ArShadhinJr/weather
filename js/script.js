let searchBar = document.querySelector( '.search-bar' );
let searchButton = document.querySelector( '.search-button' );

window.addEventListener( 'load', () => {
    getWeatherData('chittagong');
})

async function getWeatherData( city ) {
    const apiKew = '3e744ba20e4b93bad78dcce16d11eef5'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKew}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if ( data.cod == 404 ) {
        let weather = document.querySelector( '.weather' );
        weather.innerHTML = '<h2>City is Not Found</h2>';
        weather.style.color = 'red';
        weather.style.marginTop = '30px';
        searchBar.value = '';
    } else {
        const temp = document.querySelector('.temp');
    temp.innerHTML = `${parseInt(data.main.temp)}`;

    const cityName = document.querySelector('.city');
    cityName.innerHTML = data.name + ', ' + data.sys.country;

    const icon = document.querySelector('.weather-icon');
    const weatherIcon = data.weather[0].main;
    icon.src = `images/${weatherIcon}.png`;

    const humidity = document.querySelector('.humidity');
    humidity.innerHTML = `${data.main.humidity}%`;

    const wind = document.querySelector('.wind');
    wind.innerHTML = `${data.wind.speed} km/h`;

    searchBar.value = '';
    }
}
// getWeatherData('chittagong');
searchButton.addEventListener( "click",  ()=> {
    getWeatherData(searchBar.value);
} )

