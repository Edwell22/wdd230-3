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

const cardContainer = document.querySelector("#card-container");

// function showSpotlights(silverCompanies) {
//   silverCompanies.forEach((element) => {
//     console.log(element);

//     const h3 = document.createElement("h3");
//     h3.textContent = element.name;

//     const pAddress = document.createElement("p");
//     pAddress.textContent = "Address: " + element.address;


//     const img = document.createElement("img");
//     img.setAttribute("src", `./${element.image}`);
//     img.setAttribute("alt", element.name);

//     const p = document.createElement("p");
//     p.textContent = element.advertisement;
//     cardContainer.appendChild(img);
//     cardContainer.appendChild(h3);
//     cardContainer.appendChild(p2);
//     cardContainer.appendChild(pAddress);
function showSpotlights(silverCompanies) {
  silverCompanies.forEach((element) => {
    console.log(element);

    const h3 = document.createElement("h3");
    h3.textContent = element.name;

    const pAddress = document.createElement("p");
    pAddress.textContent = "Address: " + element.address;

    const pPhoneNumber = document.createElement("p");
    pPhoneNumber.textContent = "Phone Number: " + element.phoneNumber;

    const pWebsiteURL = document.createElement("p");
    pWebsiteURL.textContent = "Website URL: " + element.websiteURL;

    const pAdvertisement = document.createElement("p");
    pAdvertisement.textContent = "Advertisement: " + element.advertisement;

    const img = document.createElement("img");
    img.setAttribute("src", `./${element.image}`);
    img.setAttribute("alt", element.name);

    cardContainer.appendChild(h3);
    cardContainer.appendChild(pAddress);
    cardContainer.appendChild(pPhoneNumber);
    cardContainer.appendChild(pWebsiteURL);
    cardContainer.appendChild(pAdvertisement);
    cardContainer.appendChild(img);
  });
}
    
    
  
  });
}
