const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

address ?
geocode(address, (code)=>{
    forecast(code, (forecastData)=>{
        console.log('the weather is: ',forecastData);
    });
}) : console.log('please include address');


