const apikey="6d69a1cbe7b78eb9247430a1f2e3111b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    let data =await response.json();
    console.log(data);

    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=`Temp: ${Math.round(data.main.temp)+"°c"}`;
    document.querySelector(".humidity").innerText=`Humidity: ${data.main.humidity+"%"}`;
    document.querySelector(".colh img").src="humidity.png";
    document.querySelector(".wind").innerText=`Wind: ${data.wind.speed+" km/h"}`;
     document.querySelector(".colw img").src="wind.png"
    document.querySelector("#visi").innerText=`Visibility: ${data.visibility}`;

    if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Drizzle.png"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else{
        weatherIcon.src="mist.png";
    }

    document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})