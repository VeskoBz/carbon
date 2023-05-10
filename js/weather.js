// request to weather
//55.640721, 49.309943 
const convertTemp = (celvin) => celvin - 273.15;
const convertPressuare = (megaPascal) => megaPascal / 1.333

fetch('https://api.openweathermap.org/data/2.5/weather?&cnt=4&id=551487&appid=53cff6d53d5d0e62db130cd243ec6e32&lang=ru')

.then(function (resp){return resp.json() })
.then(function (data) {
    console.log(data)
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round( convertTemp(data.main.temp)) + ' ' +'&deg';
    document.querySelector('.weather').innerHTML = data.weather[0]['description'];
    document.querySelector('.pressure').innerHTML = data.main.pressure;

    let ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Январь'],
            datasets: [{
                label: 'Температура за день',
                data: [convertTemp(data.main.temp), convertPressuare(data.main.pressure)],
                borderWidth: 4
            }]
        },
        options: {},
    })
})
.catch(function (){
    //catch any errors
})

// fetch('https://api.openweathermap.org/data/2.5/weather?id=466806&appid=53cff6d53d5d0e62db130cd243ec6e32&lang=ru')
//
//     .then(function (resp){return resp.json() })
//     .then(function (data) {
//         console.log(data)
//         document.querySelector('.city-name-yo').innerHTML = data.name;
//         document.querySelector('.temp-yo').innerHTML = Math.round(data.main.temp - 273) + ' ' +'&deg';
//         document.querySelector('.weather-yo').innerHTML = data.weather[0]['description'];
//     })
//     .catch(function (){
//         //catch any errors
//     })

