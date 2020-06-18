const https = require('http');
const url = `http://api.weatherstack.com/current?access_key=578bc0228e26535fcec86d10691a623a&query=40,-45&units=s`;

 const req = https.request(url, (respone)=>{
    let data = '';
    respone.on('data', (chunk)=>{
        data += chunk.toString();
    });

    respone.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    });
    
});


req.on('error', error=>{
    console.log('error: ', error);
    
})

req.end();