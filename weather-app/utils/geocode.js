const request = require('request');

/**
 * returning the geocode 
 * @param {location address} address 
 * @param {callback function which calls weather API funciton} callback 
 */
const geocode = (address, callback)=>{
    const searchURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmFqZW5kcmFuZXVwYW5lIiwiYSI6ImNrYmM2N3Z6dTA4YXIycXAzdGsyaWtldm0ifQ.Hzv6dUmR211J-IuJOki_9g&limit=1`;
    request({url:searchURL, json:true}, (error, response)=>{
        if(error){
            console.log('not connected to mbox');
            return;
        }else if(response.body.error){
            console.log(response.body.error);
            return;
        }
        const coordinates = response.body.features[0].geometry.coordinates;
        let data = {
            lat: coordinates[0],
            long: coordinates[1]
        }
    
        callback(data);
    });
}


module.exports = geocode;