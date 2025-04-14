let cityinput=document.getElementById("city_input")
searchBtn=document.getElementById("searchBtn")
locationBtn=document.getElementById("locationBtn")
api_key="776603dde85d499c16edfb71ed63188f";
currentweathercard=document.querySelectorAll(".weather-left .card")[0];
fivedaysforecastCard=document.querySelector(".day-forecast");
aqicard=document.querySelectorAll('.highlights .card')[0];
sunrisecard=document.querySelectorAll('.highlights .card')[1];
humidityval=document.getElementById("humidityval")
pressureval=document.getElementById("pressureval")
visibilityval=document.getElementById("visibilityval")
windspeedval=document.getElementById("windspeedval")
feelsval=document.getElementById("feelsval")
hourlyforecastcard=document.querySelector('.hourly-forecast')
aqilist=["Good","Fair","Moderate","Poor","Very Poor"];

function getweatherdetails(name,lat,lon,country,state){
   let FORECAST_API_URL=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
   WEATHER_API_URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
   AIR_POLLUTION_API_URL=`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
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

   fetch(AIR_POLLUTION_API_URL).then(res=>res.json()).then(data=>{
    let {co,no,no2,o3,so2,pm2_5,pm10,nh3}=data.list[0].components;
      aqicard.innerHTML=`
        <div class="card-head">
                            <p>Air Quality Index</p>
                            <p class="air-index aqi-${data.list[0].main.aqi}">${aqilist[data.list[0].main.aqi - 1]}</p>
                        </div>
                        <div class="air-indices">
                            <i class="fa-regular fa-wind fa-3x"></i>
                            <div class="item">
                                <p>PM2.5</p>
                                <h2>${pm2_5}</h2>
                            </div>
                            <div class="item">
                                <p>PM10</p>
                                <h2>${pm10}</h2>
                            </div>
                            <div class="item">
                                <p>SO2</p>
                                <h2>${so2}</h2>
                            </div>
                            <div class="item">
                                <p>CO</p>
                                <h2>${co}</h2>
                            </div>
                            <div class="item">
                                <p>NO</p>
                                <h2>${no}</h2>
                            </div>
                            <div class="item">
                                <p>NO2</p>
                                <h2>${no2}</h2>
                            </div>
                            <div class="item">
                                <p>NH3</p>
                                <h2>${nh3}</h2>
                            </div>
                            <div class="item">
                                <p>O3</p>
                                <h2>${o3}</h2>
                            </div>
                        </div>
      `;
   }).catch(()=>{
    alert("Failed to fetch Air Quality Index");
   })

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
       let {sunrise,sunset}=data.sys,
       {timezone,visibility}=data,
       {humidity,pressure,feels_like}=data.main,
       {speed}=data.wind,
       srisetime=moment.utc(sunrise,"X").add(timezone,"seconds").format("hh:mm A");
       ssettime=moment.utc(sunset,"X").add(timezone,"seconds").format("hh:mm A");
       sunrisecard.innerHTML=`
          <div class="card-head">
                            <p>Sunrise & Sunset</p>
                        </div>
                        <div class="sunrise-sunset">
                            <div class="item">
                                <div class="icon">
                                    <i class="fa-light fa-sunrise fa-4x"></i>
                                </div>
                                <div>
                                    <p>Sunrise</p>
                                    <h2>${srisetime}</h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <i class="fa-light fa-sunset fa-4x"></i>
                                </div>
                                <div>
                                    <p>Sunset</p>
                                    <h2>${ssettime}</h2>
                                </div>
                            </div>
                        </div>
       `;
       humidityval.innerHTML=`${humidity}%`;
       pressureval.innerHTML=`${pressure}hPa`;
       visibilityval.innerHTML=`${visibility/1000}km`;
       windspeedval.innerHTML=`${speed}m/s`;
       feelsval.innerHTML=`${(feels_like-273.15).toFixed(2)}&deg;C`;

   }).catch(()=>{
    alert("Failed to fetch current weather");
   });
   
   fetch(FORECAST_API_URL).then(res=>res.json()).then(data=>{
    let hourlyforecast=data.list;
    hourlyforecastcard.innerHTML='';
    for(i=0;i<=7;i++){
        let hrforecastdate=new Date(hourlyforecast[i].dt_txt);
        let hr=hrforecastdate.getHours();
        let a="PM";
        if(hr<12) a="AM";
        if(hr==0) hr=12;
        if(hr>12) hr=hr-12;
        hourlyforecastcard.innerHTML+=`
          <div class="card">
                <p>${hr} ${a}</p>
                   <img src="https://openweathermap.org/img/wn/${hourlyforecast[i].weather[0].icon}.png" alt="">
                <p>${(hourlyforecast[i].main.temp -273.15).toFixed(2)}&deg;C</p>
          </div>
        `;
    }
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
                        <span>${(fivedaysforecast[i].main.temp -273.15).toFixed(2)}&deg;C</span>
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

function getUserCoordinates(){
    navigator.geolocation.getCurrentPosition(position=>{
          let {latitude,longitude}=position.coords;
          let REVERSE_GEOCODING_URL=`
          https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit={limit}&appid=${api_key}
          `;
          fetch(REVERSE_GEOCODING_URL).then(res=>res.json()).then(data=>{
            let {name,country,state}=data[0];
            getweatherdetails(name,latitude,longitude,country,state);
          }).catch(()=>{
            alert("Failed to fetch user coordinates");
          });
    },error=>{
        if(error.code===error.PERMISSION_DENIED){
            alert("Location not found");
        }
    });
}

searchBtn.addEventListener("click",getCityCoordinates)
// locationBtn.addEventListener('click',getUserCoordinates);
// cityinput.addEventListener("keyup",getUserCoordinates);
// window.addEventListener("load",getUserCoordinates);
