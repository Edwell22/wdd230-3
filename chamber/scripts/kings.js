// Last Modification Date
// Display the year at the bottom of the page
const todaysDate = new Date();
document.getElementById("year").textContent = todaysDate.getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Dropdown Menu Configuration
const button = document.querySelector("#menu");
const navList = document.querySelector("nav");
button.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Store last visit date of user in local storage

// Get Element by ID
var lastVisitElement = document.getElementById("date");
var daysBetween = document.getElementById("days");

// Get current date
var today = new Date();

// Get last visit date from local storage
var lastVisit = localStorage.getItem("lastVisit") || today;

// If last visit date is not set, set it to today
if (lastVisit == null) {
  localStorage.setItem("lastVisit", today);
} else {
  // DisplayOnPage(lastVisitElement, lastVisit,daysBetween);
}

// Set last visit date to today
localStorage.setItem("lastVisit", today);

// Function to calculate days between two dates
function calculateDateBetween(today, lastVisit) {
  var lastVisitDate = new Date(lastVisit);
  var diff = today.getTime() - lastVisitDate.getTime();
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
}

// Function to display last visit date on the page
function DisplayOnPage(lastVisitElement, lastVisit, daysBetween) {
  var lastVisitDate = new Date(lastVisit);
  var lastVisitDateFormatted = lastVisitDate.toDateString();
  lastVisitElement.innerHTML = lastVisitDateFormatted;
  daysBetween.innerHTML = calculateDateBetween(today, lastVisit);
}


/*Form*/
/*Time Stamp */

function setTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  const currentDate = new Date();
  const formattedTimestamp = currentDate.toLocaleString();
}
setTimestamp();


/*Display temperature */


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
"https://api.openweathermap.org/data/2.5/weather?lat=-12.09&lon=-77.06&appid=d95dddf55be4cf8701c5a27d5d84f3cc&units=imperial";


async function apiFetch() {
  const response = await fetch(url);
  const data = await response.json();
  

  displayResults(data);
}

function displayResults(data) {
 
  currentTemp.textContent = `${data.main.temp} °F`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  captionDesc.textContent = data.weather[0].description;
}

apiFetch();

async function getThreDayForecast() {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=-12.09&lon=-77.06&appid=76cd0cc1ffbcb7fcbc8193cf2c4758e5&units=imperial";
  const response = await fetch(url);
  const forecastData = await response.json();
  displayForecast(forecastData);
}

getThreDayForecast();

function displayForecast(forecastData) {
  const forecastDiv = document.querySelector("#three-days-forecast");
  forecastData.list.forEach((threeHour, i) => {
    if ([9, 18, 36].includes(i)) {
      const dayContainer = document.createElement("div");
      dayContainer.classList.add("day-container");
      const p = document.createElement("p");
      p.textContent = threeHour.main.temp;
      dayContainer.appendChild(p);
      forecastDiv.appendChild(dayContainer);
    }
  });
}

/*DIRECTORY*/
/* Function to change the view of the card container */
const changeView = () => {
  // Select the view selector element
  const selector = document.querySelector("#view");
  // Select the main card container element
  const main = document.querySelector("#card-container");
  // Get the selected value from the view selector
  const selectedValue = selector.value;

  // Toggle classes based on the selected value
  if (selectedValue === "column") {
    // If column view is selected, remove grid class and add column class
    main.classList.remove("grid");
    main.classList.toggle("column");
  } else if (selectedValue === "grid") {
    // If grid view is selected, remove column class and add grid class
    main.classList.remove("column");
    main.classList.toggle("grid");
  }
};

// Select the view selector element
const changeViewVar = document.querySelector("#view");

// Add event listener to the view selector for change event
if (changeViewVar) {
  changeViewVar.addEventListener("change", changeView);
}



// dark mode and light mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const kings = document.querySelector("#kings");
const sections = document.querySelectorAll("section");
const socialIcons = document.querySelectorAll(".social");
const asideElement = document.querySelector("aside");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

function enableDarkMode() {
    main.style.background = "#000";
    main.style.color = "#fff";
    body.style.background = "#000";
    body.style.color = "#fff";
    kings.style.background = "#000";
    kings.style.color = "#fff";
    asideElement.style.background = "#000";
    asideElement.style.color = "#fff";
    socialIcons.forEach(icon => {
        icon.style.background = "#000";
        icon.style.color = "#fff";
    });

    sections.forEach(section => {
        section.style.background = "#000";
        section.style.color = "#fff";
    });
    modeButton.textContent = "🔆";
}

function enableLightMode() {
    main.style.background = "";
    main.style.color = "";
    body.style.background = "";
    body.style.color = "";
    kings.style.background = "";
    kings.style.color = "";
    asideElement.style.background = "";
    asideElement.style.color = "";
    socialIcons.forEach(icon => {
        icon.style.background = "";
        icon.style.color = "";
    });
    sections.forEach(section => {
        section.style.background = "";
        section.style.color = "";
    });
    modeButton.textContent = "🌑";
}




// Function to update last visit information
function updateLastVisit() {
  // Get the current date
  const currentDate = new Date();
  // Get the last visit date from localStorage
  const lastVisitDate = localStorage.getItem("lastVisitDate");

  // Check if there's a last visit date stored
  if (lastVisitDate) {
      // Parse the last visit date from string to Date object
      const lastVisit = new Date(lastVisitDate);
      // Calculate the difference in milliseconds between current date and last visit date
      const differenceInMs = currentDate - lastVisit;
      // Calculate the difference in days
      const daysBetweenVisits = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      // Update the days between visits element
      document.getElementById("days").textContent = daysBetweenVisits;
  }

  // Update the last visit date in localStorage
  localStorage.setItem("lastVisitDate", currentDate);
  // Update the date element
  document.getElementById("date").textContent = currentDate.toLocaleString();
}

// Call the function to update last visit information
updateLastVisit();
