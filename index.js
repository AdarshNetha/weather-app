let emoji=document.getElementById("emoji")
let type=document.getElementById("type")
let temp=document.getElementById("temp")
let loc=document.getElementById("loc")
let date=document.getElementById("date")
let time= document.getElementById("time")
let lat=null;
let long=null;
let apikey="b448794a4d1ad7244666ae72b7e6350a"
const now =new Date();
const tdate=now.getDate();
const month=now.getMonth();
const year=now.getFullYear(0);
const hours=now.getHours();
const minutes=now.getMinutes();
let data;

let getloc=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        lat=position.coords.latitude
        long=position.coords.longitude;
        console.log(lat);
        console.log(long);
      weather();
    })
}

let weather=async()=>{
  let api=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`)
  const fdata=await api.json();
  if(fdata.weather[0].main=="Mist"||fdata.weather[0].main=="Haze" || fdata.weather[0].main=="Fog" ||fdata.weather[0].main=="Smoke")
  {
    emoji.innerHTML=`🌁`
  }
  if(fdata.weather[0].main=="Sunny")
  {
    emoji.innerHTML=`☀️`
  }
  type.innerHTML=`${fdata.weather[0].main}`
  temp.innerHTML=`${fdata.main.temp}`
  loc.innerHTML=`${fdata.name}`
  date.innerHTML=`${tdate}-${month+1}-${year}`
  if(hours>12){
     time.innerHTML=`${hours-12}:${minutes}PM`
  }
  else
  {
    time.innerHTML=`${hours}:${minutes}AM`
  }
 
  
}

// 🌤️ Partly Cloudy

// ⛅ Cloudy

// ☁️ Overcast



// 🌧️ Rainy

// 🌦️ Light Rain

// 🌧️ Heavy Rain

// ⛈ Thunderstorm

// 🌨️ Snow

// 🌬 Windy

getloc();