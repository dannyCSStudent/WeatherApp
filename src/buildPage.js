import weather from './images/weather.png';
import clouds from './images/clouds.png';

export const buildPage = () => { 
    const weatherImage = new Image();
    weatherImage.src = weather;
    const cloudImage = new Image();
    cloudImage.src = clouds;
    
    const body = document.querySelector('body');
    const container = document.createElement('div');
    const header = document.createElement('div');
    const headerImg = document.createElement('img');
    const currentDate = document.createElement('span');
    const searchBar = document.createElement('div');
    const search = document.createElement('input');
    const searchBtn = document.createElement('button');
    const cityInfo = document.createElement('div');
    const cityCountry = document.createElement('span');
    const tempInfo = document.createElement('div');
    const temp = document.createElement('span');
    const tempImg = document.createElement('img');
    const weatherInfo = document.createElement('div');
    const infoLow = document.createElement('div');
    const lowTitle = document.createElement('span');
    const lowValue = document.createElement('span');
    const infoFeels = document.createElement('div');
    const feelsTitle = document.createElement('span');
    const feelsValue = document.createElement('span');
    const infoHumid = document.createElement('div');
    const humidTitle = document.createElement('span');
    const humidValue = document.createElement('span');
    const infoHigh = document.createElement('div');
    const highTitle = document.createElement('span');
    const highValue = document.createElement('span');
    const footer = document.createElement('div');
    const footerTitle = document.createElement('span');
    const celsiusSwitch = document.createElement('label');
    const celsius = document.createElement('input');
    const slider = document.createElement('slider');
    
    container.classList.add('container');

    header.classList.add('header');
    headerImg.setAttribute('src', weatherImage.src);
    currentDate.classList.add('current-date');
    currentDate.textContent = new Date().toDateString();
    header.appendChild(headerImg);
    header.appendChild(currentDate)
    container.appendChild(header);

    searchBar.classList.add('search-bar');
    search.setAttribute('id', 'search');
    searchBtn.setAttribute('id', 'search-btn');
    searchBtn.textContent = 'Search';
    searchBar.appendChild(search);
    searchBar.appendChild(searchBtn);
    container.appendChild(searchBar);

    cityInfo.classList.add('city-info');
    cityCountry.classList.add('city-country');
    cityInfo.appendChild(cityCountry)
    container.appendChild(cityInfo);

    tempInfo.classList.add('temp-info');
    temp.classList.add('temp');
    tempImg.setAttribute('src', cloudImage.src);
    tempInfo.appendChild(temp);
    tempInfo.appendChild(tempImg);
    container.appendChild(tempInfo);

    weatherInfo.classList.add('weather-info');

    infoLow.classList.add('info','low');
    lowTitle.classList.add('attr');
    lowTitle.textContent = 'Low';
    lowValue.classList.add('val');
    infoLow.appendChild(lowTitle);
    infoLow.appendChild(lowValue);
    weatherInfo.appendChild(infoLow);

    infoFeels.classList.add('info', 'feels',);
    feelsTitle.classList.add('attr');
    feelsTitle.textContent = 'Feels Like';
    feelsValue.classList.add('val');
    infoFeels.appendChild(feelsTitle);
    infoFeels.appendChild(feelsValue);
    weatherInfo.appendChild(infoFeels);

    infoHumid.classList.add('info', 'humid');
    humidTitle.classList.add('attr');
    humidTitle.textContent = 'Humidity';
    humidValue.classList.add('val');
    infoHumid.appendChild(humidTitle);
    infoHumid.appendChild(humidValue);
    weatherInfo.appendChild(infoHumid);

    infoHigh.classList.add('info', 'high');
    highTitle.classList.add('attr');
    highTitle.textContent = 'High';
    highValue.classList.add('val');
    infoHigh.appendChild(highTitle);
    infoHigh.appendChild(highValue);
    weatherInfo.appendChild(infoHigh);
    container.appendChild(weatherInfo);

    footer.classList.add('footer');
    celsiusSwitch.classList.add('switch');
    footerTitle.classList.add('footer-title');
    footerTitle.textContent = 'Celsius | Fahrenheit';
    celsiusSwitch.classList.add('switch');
    celsius.setAttribute('id', 'celsius');
    celsius.setAttribute('type', 'checkbox');
    slider.classList.add('slider');
    celsiusSwitch.appendChild(celsius);
    celsiusSwitch.appendChild(slider);
    footer.appendChild(footerTitle);
    footer.appendChild(celsiusSwitch);
    container.appendChild(footer);

    body.appendChild(container); 
}
