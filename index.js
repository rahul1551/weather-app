console.log("JS Loaded");

// setTimeout(() => {
//     // console.log("hi")
//     weatherNow.style.letterSpacing = "1.5rem";
// }, 2000);


const inputForm = document.querySelector(".input-form");
const inputValue = document.querySelector(".input-form input[type='text']");
const cityName = document.querySelectorAll(".h-expand");
const icon = document.querySelector(".weather-head img");
const temp = document.querySelector(".weather-head h2");
const weatherNow = document.querySelector(".weather-now")
const tempMax = document.querySelector(".temp-max h2");
const tempMin = document.querySelector(".temp-min h2");
const humidity = document.querySelector(".humidity h2");
const wind = document.querySelector(".wind h2");
const realfeel = document.querySelector(".realfeel h2");



inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = inputValue.value;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=29873aff66ad28d8eefe90b74d8e20b4`;

    fetch(URL).then(res => res.json())
        .then(data => {

            function changeToDegree(kel) {
                let cel = kel - 273.15
                const celFloor = Math.floor(cel);
                return celFloor;
            }

            if (data.name == undefined) {
                alert("enter correct city name");
                inputValue.value = "";
            } else {
                cityName[0].innerHTML = data.name;
                cityName[1].innerHTML = data.name;

            }

            const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            icon.src = iconLink;

            temp.innerHTML = `${changeToDegree(data.main.temp)} &deg C`;
            weatherNow.innerHTML = data.weather[0].main;

            tempMax.innerHTML = `${changeToDegree(data.main.temp_max)} &deg C`
            tempMin.innerHTML = `${changeToDegree(data.main.temp_min)} &deg C`

            humidity.innerHTML = `${data.main.humidity}%`;
            wind.innerHTML = `${data.wind.speed} m/s`;
            realfeel.innerHTML = `${changeToDegree(data.main.feels_like)} &deg C`

            
            inputValue.value = "";
        })
})






