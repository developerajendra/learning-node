const request = require('request');

const forecast = (data, callback)=>{
    const {lat, long} = data;
    const url = `http://api.weatherstack.com/current?access_key=578bc0228e26535fcec86d10691a623a&query=${lat,long}&units=s`;
    request({url, json:true}, (error, response)=>{
        if(error){
            callback('not connected to weatherstack');
            return;
        }else if(response.body.error){
            callback(response.body.error.info);
            return;
        }
        
        const data = response.body.current;
        callback(data);
    });

}

module.exports = forecast;