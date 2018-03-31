
let apiKey = 'd6ccf0c22e52dab255ac4cc332b57171';
let city = 'seattle';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    let weather = JSON.parse(body);
let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
console.log(message);
  }
});

