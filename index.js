const fs = require("fs");
const http = require("http");
var requests = require('requests');

const homeFile = fs.readFileSync("home.html","utf-8");
const replaceVal=(tempVal,orgVal)=>{
    let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
    
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=temperature.replace("{%place%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    temperature=temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temperature;
}
const server = http.createServer((req,res)=>{
    if(req.url=="/")
        requests('https://api.openweathermap.org/data/2.5/weather?lat=17.32&lon=78.53&appid=3182278b8f20d1728b51dc95209e2b5c')
.on('data', (chunk)=> {
    const objdata=JSON.parse(chunk);
    const arrdata=[objdata];
    const realTimeData=arrdata.map((val)=>replaceVal(homeFile,val)).join("");
    res.write(realTimeData);
   
    
})
.on('end', (err)=> {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
});
server.listen(3000,"127.0.0.1");