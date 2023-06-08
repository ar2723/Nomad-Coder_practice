const API_KEY = "cbb8cb6fa3e1f5c90e2b9c3882a9bfc0";

function onGeoOk(position){
     const lat = position.coords.latitude
     const lon = position.coords.longitude
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
     
     fetch(url).then((response) => response.json()).then((data) => {
          const temper = document.querySelector("#weather span:nth-child(1)")
          const weather = document.querySelector("#weather span:nth-child(2)")

          temper.innerText = `${data.main.temp.toFixed(1)}℃`;
          weather.innerText = `${data.weather[0].main}`;
     });
}

function onGeoError(){
     alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);