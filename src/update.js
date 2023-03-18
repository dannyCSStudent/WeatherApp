const weatherApp = (() => {
    let isCelsius = true;
    let degree = '';
      
    const getWeather = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=f796aca0e6c1ac599bf7698aa3ea547e`, {mode: 'cors'});
            const appData = await response.json();    
            const data = {
                temp : parseInt(appData.main.temp),
                lowest : parseInt(appData.main.temp_min),
                feels : parseInt(appData.main.feels_like),
                humid : appData.main.humidity,
                highest : parseInt(appData.main.temp_max)
            }

            if (isCelsius) {
                data.temp -= 273;
                data.lowest -= 273;
                data.feels -= 273;
                data.highest -= 273;
                degree = 'C'
            }
            else {
                data.temp = Math.round(((data.temp - 273) * 1.8 + 32) * 100) / 100;
                data.lowest = Math.round(((data.lowest - 273) * 1.8 + 32) * 100) / 100;
                data.feels = Math.round(((data.feels - 273) * 1.8 + 32) * 100) / 100;
                data.highest = Math.round(((data.highest - 273) * 1.8 + 32) * 100) / 100;
                degree = 'F'
            }
            const cityCountry = document.querySelector('.city-country');
            const temperture = document.querySelector('.temp');
            const low = document.querySelector('.low .val');
            const feelsLike = document.querySelector('.feels .val');
            const humidity = document.querySelector('.humid .val');
            const high = document.querySelector('.high .val');
            cityCountry.textContent = appData.name + ' | ' + appData.sys.country;
            temperture.textContent = `${data.temp} °${degree}`;
            low.textContent = `${data.lowest} °${degree}`;
            feelsLike.textContent = `${data.feels} °${degree}`;
            humidity.textContent = `${data.humid}%`;
            high.textContent = `${data.highest} °${degree}`;
            
        } catch (error) {
            const cityCountry = document.querySelector('.city-country');
            const temperture = document.querySelector('.temp');
            const low = document.querySelector('.low .val');
            const feelsLike = document.querySelector('.feels .val');
            const humidity = document.querySelector('.humid .val');
            const high = document.querySelector('.high .val');
            cityCountry.textContent = 'City not found';
            temperture.textContent = '';
            low.textContent = '';
            feelsLike.textContent = '';
            humidity.textContent = '';
            high.textContent = '';
        }
    }
  
    const init = async () => {
        
        await getWeather('Mexico City');
        const searchBtn = document.querySelector('#search-btn');
        searchBtn.addEventListener('click', () => {
            const search = document.querySelector('#search');
            if (search.value == '') {
  
            } else {
                getWeather(search.value)
                search.value = '';
            }  
        })
        const celsius = document.querySelector('#celsius');
        celsius.addEventListener('change', () => {
            isCelsius = !isCelsius;
            const cityCountry = document.querySelector('.city-country');
            getWeather(cityCountry.textContent.split(' | ')[0]);
        })
    }
  
    return {
        init
    }

})();
  
export default weatherApp.init();
  