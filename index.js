let lat=null;
let long=null;
let apikey="6a8226f8301c98110488271aae60cde4"

let getloc=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        lat=position.coords.latitude
        long=position.coords.longitude;
      
    weather();
    })
}
getloc();
let weather=async()=>{
  let api=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`)
  console.log(await api.json());
}