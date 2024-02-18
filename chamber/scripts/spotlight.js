const spotlightJson = "https://edwell22.github.io/wdd230-3/chamber/data/spotlight.json";

async function getAllAdvertisements(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const advertisements = data.Advertisements;
    
    showAdvertisements(advertisements);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getAllAdvertisements(spotlightJson);

const spotlights = document.querySelector("#spotlights");

function showAdvertisements(advertisements) {
  advertisements.forEach((advertisement) => {
    const div = document.createElement("div");
    div.classList.add("advertisement");

    const h3 = document.createElement("h3");
    h3.textContent = advertisement.name;

    const pAddress = document.createElement("p");
    pAddress.textContent = "Address: " + advertisement.address;

    const pPhoneNumber = document.createElement("p");
    pPhoneNumber.textContent = "Phone Number: " + advertisement.phoneNumber;

    const pWebsiteURL = document.createElement("p");
    const aWebsiteLink = document.createElement("a");
    aWebsiteLink.setAttribute("href", advertisement.websiteURL);
    aWebsiteLink.textContent = "Website URL";
    pWebsiteURL.appendChild(aWebsiteLink);

    const img = document.createElement("img");
    img.setAttribute("src", advertisement.image);
    img.setAttribute("alt", advertisement.name);

    const pMembershipLevel = document.createElement("p");
    pMembershipLevel.textContent = "Membership Level: " + advertisement.membershipLevel;

    const pAdvertisement = document.createElement("p");
    pAdvertisement.textContent = "Advertisement: " + advertisement.advertisement;

    div.appendChild(h3);
    div.appendChild(pAddress);
    div.appendChild(pPhoneNumber);
    div.appendChild(pWebsiteURL);
    div.appendChild(img);
    div.appendChild(pMembershipLevel);
    div.appendChild(pAdvertisement);

    spotlights.appendChild(div);
  });
}

   