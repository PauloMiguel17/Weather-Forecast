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
    
});

function showAlert(msg){
    document.querySelector('#alert').innerHTML= msg;
}