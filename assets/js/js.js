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
    p.innerHTML = newDate; 

}



const getTodaysInfo = async (city) =>{
    ///get the Weather apis response
// const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD7neHHqfKylKN206rx0tnSRa5uq1nvmoY&part=snippet&maxResults=30&chart=${topic}&videoEmbeddable=true`)
// console.log(response.data.items)
// let repos = response.data.items
if (city){


let selectCity = document.getElementsByName("selectedCity")
selectCity.innerHTML = city
let temp = document.getElementById("tempToday"); 
temp.innerHTML = "Temp: " + "75"
let wind = document.getElementById("windToday"); 
wind.innerHTML = "Wind: " + "7 MPH"

let humidity = document.getElementById("humidityToday"); 
humidity.innerHTML = "Humidity: " + "44"

}
}


const getTommorowsInfo = () =>{


    let temp = document.getElementById("tempTommorow"); 
    temp.innerHTML = "Temp: " + "76"
    let wind= document.getElementById("windTommorow"); 
    wind.innerHTML = "Wind: " + "8 MPH"
    
    let humidity = document.getElementById("humidityTommorow"); 
    humidity.innerHTML = "Humidity: " + "45"
    }



const getDayafterInfo = () =>{


    let temp = document.getElementById("tempDayafter"); 
    temp.innerHTML = "Temp: " + "77"
    let wind = document.getElementById("windDayafter"); 
    wind.innerHTML = "Wind: " + "9 MPH"
    
    let humidity = document.getElementById("humidityDayafter"); 
    humidity.innerHTML = "Humidity: " + "46"
    }
const getDaysafterInfo = () =>{


    let temp = document.getElementById("tempDaysafter"); 
    temp.innerHTML = "Temp: " + "78"
    let wind = document.getElementById("windDaysafter"); 
    wind.innerHTML = "Wind: " + "10 MPH"
    
    let humidity = document.getElementById("humidityDaysafter"); 
    humidity.innerHTML = "Humidity: " + "47"
    }

const getDaysafterDaysInfo = () =>{


    let temp = document.getElementById("tempDaysafterDays"); 
    temp.innerHTML = "Temp: " + "75"
    let wind = document.getElementById("windDaysafterDays"); 
    wind.innerHTML = "Wind: " + "7 MPH"
    
    let humidity = document.getElementById("humidityDaysafterDays"); 
    humidity.innerHTML = "Humidity: " + "44"
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
                  <i class="fab fa-youtube"></i>
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

    if (city) {
        getReposByCity(city)
        getResults()



    }else{
        console.log("Invalid city. Enter correct city from the list")
    }

  })


  citybuttonEl.addEventListener('click', (event) => {
    event.preventDefault();
    const city = event.target
    console.log(city.textContent + ` button is clicked.`)

    if (city.textContent) {
        getReposByCity(city.textContent)
        getResults()
    }

  })
//---will have to be inside the function getReposByCity()---
const getResults = () => {
    getDate()
    getTodaysInfo(city)
    getTommorowsInfo()
    getDayafterInfo()
    getDaysafterInfo()
    getDaysafterDaysInfo()

}
if(city){


getResults()
}