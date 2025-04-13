let cityinput=document.getElementById("city_input")
searchBtn=document.getElementById("searchBtn")
api_key="776603dde85d499c16edfb71ed63188f";
currentweathercard=document.querySelectorAll(".weather-left .card")[0];
fivedaysforecastCard=document.querySelector(".day-forecast");

function getweatherdetails(name,lat,lon,country,state){
   let FORECAST_API_URL=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
   WEATHER_API_URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
   days=[
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
   ],
   months=[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
   ];
   fetch(WEATHER_API_URL).then(res=> res.json()).then(data=>{
       let date=new Date();
       currentweathercard.innerHTML=`
       <div class="current-weather">
                        <div class="details">
                            <p>Now</p>
                            <h2>${(data.main.temp-273.15).toFixed(2)}&deg;C</h2>
                            <p>${data.weather[0].description}</p>
                        </div>
                        <div class="weather_icon">
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                        </div>
        </div>
            <hr>
        <div class="card-footer">
                <p><i class="fa-light fa-calendar"></i>${days[date.getDay()]},${date.getDate()},${months[date.getMonth()]} ${date.getFullYear()}</p>
                <p><i class="fa-light fa-location-dot"></i>${name},${country}</p>
        </div>
       `;
   }).catch(()=>{
    alert("Failed to fetch current weather");
   });
   
   fetch(FORECAST_API_URL).then(res=>res.json()).then(data=>{
       let uniqueforecastdays=[];
       let fivedaysforecast=data.list.filter(forecast=>{
        let forecastdate=new Date(forecast.dt_txt).getDate();
        if(!uniqueforecastdays.includes(forecastdate)){
            return uniqueforecastdays.push(forecastdate);
        }
       });
       fivedaysforecastCard.innerHTML="";
       for(i=1;i<fivedaysforecast.length;i++){
        let date=new Date(fivedaysforecast[i].dt_txt);
        fivedaysforecastCard.innerHTML+=`
            <div class="forecast-item">
                    <div class="icon-wrapper">
                        <img src="https://openweathermap.org/img/wn/${fivedaysforecast[i].weather[0].icon}.png" alt="">
                        <span>${(fivedaysforecast[i].main.temp -273.15.toFixed(2))}&deg;C</span>
                    </div>
                    <p>${date.getDate()} ${months[date.getMonth()]}</p>
                    <p>${days[date.getDay()]}</p>
            </div>
        `;
       }
   }).catch(()=>{
    alert("Failed to fetch weather forecast");
   });


}

function getCityCoordinates(){
    let cityname=cityinput.value.trim();
    cityinput.value="";
    if(!cityname) return;
    let GEOCODING_API_URL_=`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${api_key}`;
    fetch(GEOCODING_API_URL_).then(res=>res.json()).then(data=>{
           let {name,lat,lon,country,state}=data[0];
           getweatherdetails(name,lat,lon,country,state);

    }).catch(()=>{
        alert(`Failed to fetch coordinates of ${cityname}`);
    })
}

searchBtn.addEventListener("click",getCityCoordinates)