/* Last Modification Date*/

//Display the year at the bottom of the page
const todaysDate = new Date();
document.getElementById("year").textContent = todaysDate.getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

//DropDown Menu Configuration
const button = document.querySelector("#menu");
const navList = document.querySelector("nav");
button.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Store last visit date of user in local storage

//Get Element by ID
var lastVisitElement = document.getElementById("date");
var daysBetween = document.getElementById("days");

// Get current date
var today = new Date();

// Get last visit date from local storage
var lastVisit = localStorage.getItem("lastVisit") || today;

// If last visit date is not set, set it to today
if (lastVisit == null) {
    localStorage.setItem("lastVisit", today);
    }
// If last visit date is set, show it
else {
    DisplayOnPage(lastVisitElement, lastVisit,daysBetween);
    }

// Set last visit date to today
localStorage.setItem("lastVisit", today);

function calculateDateBetween(today, lastVisit) {
    var lastVisitDate = new Date(lastVisit);
    var diff = today.getTime() - lastVisitDate.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}

function DisplayOnPage(lastVisitElement,lastVisit, daysBetween) {
    var lastVisitDate = new Date(lastVisit);
    var lastVisitDateFormatted = lastVisitDate.toDateString();
    lastVisitElement.innerHTML = lastVisitDateFormatted;
    daysBetween.innerHTML = calculateDateBetween(today, lastVisit);

}
/* LAST VISITS */
const msToDays = 84600000; // using to convert to ms to days

if (localStorage.getItem("lastVisitDate")) {
  const lastVisitDate = new Date(
    localStorage.getItem("lastVisitDate")
  ).getTime();
  const today = Date.now();
  let daysDifference = (today - lastVisitDate) / msToDays;
  let message = "";

  if (daysDifference < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysDifference >= 1) {
    if (daysDifference > 1 && daysDifference < 2) {
      message = `Your last visit was ${Math.floor(daysDifference)} day ago`;
    } else {
      message = `Your last visit was ${Math.floor(daysDifference)} days ago`;
    }
  }

  // Move this line outside of the if and else if blocks
  const divLastVisit = document.querySelector("#last-visit");
  divLastVisit.textContent = message;

  localStorage.setItem("lastVisitDate", todaysDate);
} else {
  // If this is the first visit, display a welcome message
  document.getElementById("last-visit").textContent =
    "Welcome! Let us know if you have any questions.";
}
/*Form*/
/*Time Stamp */

function setTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  const currentDate = new Date();
  const formattedTimestamp = currentDate.toLocaleString();
}
setTimestamp();

// Members Dinamically

const cardContainer = document.querySelector("#card-container");
const membersUrl = "https://edwell22.github.io/wdd230/Borrowdale-chamb/data/members.json";

async function getMembers() {
  try {
    const response = await fetch(membersUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(membersData) {
  membersData.companies.forEach((company) => {
    const article = document.createElement("article");
    article.classList.add("container");

    const h2 = document.createElement("h2");
    h2.textContent = company.name;

    const address = document.createElement("p");
    address.textContent = company.address;

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = company.phoneNumber;

    const website = document.createElement("a");
    website.setAttribute("href", company.websiteURL);
    website.textContent = company.websiteURL;
    website.classList.add("memberLink");

    const memberShipLevel = document.createElement("p");
    memberShipLevel.textContent = `MemberShip Level: ${company.membershipLevel}`;

    const img = document.createElement("img");
    img.setAttribute("src", company.image);

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(address);
    article.appendChild(phoneNumber);
    article.appendChild(website);
    article.appendChild(memberShipLevel);

    cardContainer.appendChild(article);
  });
}

if (cardContainer) {
  getMembers();
}

/*SELECT THE VIEW*/

const changeView = () => {
  const selector = document.querySelector("#view");
  const main = document.querySelector("#card-container");
  const selectedValue = selector.value;
  if (selectedValue === "column") {
    main.classList.remove("grid");
    main.classList.toggle("column");
  } else if (selectedValue === "grid") {
    main.classList.remove("column");
    main.classList.toggle("grid");
  }
};

const changeViewVar = document.querySelector("#view");
if (changeViewVar) {
  changeViewVar.addEventListener("change", changeView);
}

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
    "https://api.openweathermap.org/data/2.5/forecast?lat=49.74&lon=6.63&appid=76cd0cc1ffbcb7fcbc8193cf2c4758e5&units=imperial";
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

/*ADVERTISEMENT*/

const memberJson = "https://edwell22.github.io/wdd230-3/chamber/data/members.json";
async function getSilverMembers(url) {
  const data = await fetch(url);
  const jsonData = await data.json();
  const silverCompanies = jsonData.companies.filter(
    (company) => company.membershipLevel === "Silver"
  );

  console.log(silverCompanies);

  showSpotlights(silverCompanies);
}

getSilverMembers(memberJson);

const spotlights = document.querySelector("#spotlights");

function showSpotlights(silverCompanies) {
  silverCompanies.forEach((element) => {
    console.log(element);

    const h3 = document.createElement("h3");
    h3.textContent = element.name;

    const img = document.createElement("img");
    img.setAttribute("src", `./${element.image}`);
    img.setAttribute("alt", element.name);

    const p = document.createElement("p");
    p.textContent = element.advertisement;

    spotlights.appendChild(h3);
    spotlights.appendChild(img);
    spotlights.appendChild(p);
  });
}
