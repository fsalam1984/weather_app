const userFormEl = document.querySelector('#user-form');
const citybuttonEl = document.querySelector('#citybuttons');
const nameInputEl = document.querySelector('#cities');
const repoContainerEl = document.querySelector('#repos-container');
const repoSearchTerm = document.querySelector('#repo-search-term');
const city = "";

const getDate = () => {

    let date = new Date(); 
    let dd = date.getDate(); 
    let mm = date.getMonth() + 1; 
    let yyyy = date.getFullYear(); 
    let newDate = mm + "/" + dd + "/"  +yyyy; 
    let p = document.getElementById("date"); 
    // p.innerHTML = newDate; 
  
    return newDate;
}



const getForecastInfo = async (city, newDate) =>{
    ///get the Weather apis response
let key = "32d55c7fa9484c3d99a150734241304"
const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city},USA&days=5&aqi=no&alerts=no?`)
console.log(response.data.forecast)
let i= 0;
repos = response.data.forecast
maxTemp = repos.forecastday[i].day.maxtemp_f
maxWind = repos.forecastday[i].day.maxwind_mph
maxHumidity = repos.forecastday[i].day.avghumidity
icon1 = repos.forecastday[i].day.condition.icon
iconurl = "https:" + icon1
if (city){


let selectCity = document.getElementById("selectedCity")
selectCity.innerHTML = city + " (" + newDate+ ")" +
`       <img style="display: block;-webkit-user-select: none;transition: background-color 300ms;"  id="wicon" src='${iconurl}' alt="Weather icon">
`
let temp = document.getElementById("tempToday"); 
temp.innerHTML = "Temp: " + maxTemp 
let wind = document.getElementById("windToday"); 
wind.innerHTML = "Wind: " + maxWind +  " MPH"

let humidity = document.getElementById("humidityToday"); 
humidity.innerHTML = "Humidity: " + maxHumidity



repoContainerEl.innerHTML = ``;


    for(i=1;i<repos.forecastday.length ;i++)
    { 
        displayDate = repos.forecastday[i].date
        displayDate1 = displayDate.split("-")
        displayDate2 = displayDate1[1] + "/" + displayDate1[2] + "/" + displayDate1[0]
        displayDate = displayDate2
        icon1 = repos.forecastday[i].day.condition.icon
        iconurl = "https:" + icon1

        maxTemp = repos.forecastday[i].day.maxtemp_f
        maxWind = repos.forecastday[i].day.maxwind_mph
        maxHumidity = repos.forecastday[i].day.avghumidity 
        repoContainerEl.innerHTML += 
        
            `
        <div class="col-md-4 " id ="Days after days" style="background-color: navy; color: white;" max-width="20%">
        ${displayDate}
        <div id="icon"><img style="display: block;-webkit-user-select: none;transition: background-color 300ms;"  id="wicon" src='${iconurl}' alt="Weather icon"></div>
        <div><span id="tempDaysafterDays">${"Temp: " + maxTemp} </span>&deg;${"F"} </div>
        <div><span id="windDaysafterDays"> ${"Wind: " + maxWind + " MPH"}</span></div>
        <div><span id="humidityDaysafterDays">${"Humidity: " + maxHumidity} </span>&percnt; </div>

        </div>
        `;
    
    }
}
}


const getReposByCity = async (city) => {



    if (city==="Atlanta") {
        lon = "mostPopular"
        lat = ""

  
    }else if (city =="Miami") {
        lon = "mostPopular"
        lat = ""

    }else if (city =="New York") {
        lon = "mostPopular"
        lat = ""

    }else if (city =="Los Angeles") {
        lon = "mostPopular"
        lat = ""

    }else if (city =="Denver") {
        lon = "mostPopular"
        lat = ""

    }else if (city =="Austin") {
        lon = "mostPopular"
        lat = ""

    }else if (city =="San Francisco") {
        lon = "mostPopular"
        lat = ""
    }else if (city =="Seattle") {
        lon = "mostPopular"
        lat = ""

    }else {
        console.log("Invalid ")
    }
    return city;
    // return response.data.items
    //Function to get all urls from the response data
    // let repos = response.data.items.forEach(item => { console.log(item.url)} )
  
  
    // displayRepos(repos)
    
  }



  const displayRepos = (repos) => {
    repoContainerEl.innerHTML = ``;
    repos.forEach((repo) => {
      let url = `https://www.youtube.com/watch?v=${repo.id}`;
      
  
      repoContainerEl.innerHTML += 
      
      `
          <div class="list-item flex-row justify-space-between align-center" data-link="${url}">
              <span>${repo.snippet.title}</span>
              <span class="flex-row align-center">
                  <j class="fab fa-youtube"></j>
              </span>
              <img src="${repo.snippet.thumbnails.medium.url}"
              <a href=${url}>MyLink</a>
          </div>
      `;
    })
  }
  


  userFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = nameInputEl.value;
    console.log(city + ` : search is clicked.`)
    mylist = ["Atlanta", "New York", "Los Angeles", "Denver", "Miami", "Seattle", "San Francisco", "Austin"]
    if (mylist.includes(city)) {
        getReposByCity(city)
        getResults(city)

    }else{
        alert("Please enter a city from the list of cities below...")
        console.log("Invalid city. Enter correct city from the list")
    }

  })


  citybuttonEl.addEventListener('click', (event) => {
    event.preventDefault();
    const city = event.target
    console.log(city.textContent + ` button is clicked.`)

    if (city.textContent) {
        getReposByCity(city.textContent)
        getResults(city.textContent)
    }

  })
//---will have to be inside the function getReposByCity()---
const getResults = (city) => {
    getDate()
    getForecastInfo(city, getDate())


}
