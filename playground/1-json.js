const fs = require('fs');
 
const userDataBuffer = fs.readFileSync('1-json.json');
const dataJSON = userDataBuffer.toString(); 
const data = JSON.parse(dataJSON);


data.name = "Rajendra";
data.age = 30;

const stringifyData = JSON.stringify(data);
fs.writeFileSync('1-json.json', stringifyData);


