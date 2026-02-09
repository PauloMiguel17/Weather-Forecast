document.querySelector('#search').addEventListener('submit', async (event) =>{
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;
    if(!cityName){
        return showAlert('Digite o nome de uma cidade.')
    }

    const apiKey = '20db2617f088daa044ddae6661b6568e';
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)},{country code}&appid=${apiKey}&units=metric&
    Lang=pt-br`;

    const results = await fetch(apiUrl);
    const json = await results.json();
    
    if(json.cod === 200){
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        })
    }
    else{
        showAlert('Não foi possivel localizar a cidade.')
    }
});

function showInfo(json){
    showAlert('');
}

function showAlert(msg){
    document.querySelector('#alert').innerHTML= msg;
}