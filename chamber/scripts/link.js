// Define baseURL and linksURL
const baseURL = "https://edwell22.github.io/wdd230-3/";
const linksURL = "https://edwell22.github.io/wdd230-3/data/links.json";
const cards = document.querySelector('#cards');

// Asynchronous function to get links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

getLinks();

// Function to display links
function displayLinks(data) {
  const weeks = Array.isArray(data) ? data : (data.weeks || []);

  weeks.forEach(week => {
    const listItem = document.createElement('li');
    const linksArray = week.links.map(link => `[<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>]`);

    listItem.innerHTML = `${week.week}: ${linksArray.join(' - ')}`;

    cards.appendChild(listItem);
  });
}