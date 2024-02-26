//fetch API
//application interface programming
//its uses request and response object
//fetch()  method used to fetch data 
//fetching resource by api provided inteface
//status 200 success full fetch data

let p=fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
p.then((response)=>{
    console.log(response.status);
    return response.json();

}).then ((value2)=>{
    
    console.log(value2);
});

console.log("hello");
