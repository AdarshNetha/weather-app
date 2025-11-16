let lat=null;
let long=null;

let getloc=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        lat=position.coords.latitude
        long=position.coords.longitude;
            console.log(lat);
    console.log(long);
    
    })



}
let weather=async()=>{
    let api=fetch(``)
}