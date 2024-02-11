  const memberJson = "https://edwell22.github.io/wdd230-3/chamber/data/members.json";

async function getMembers(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const companies = data.companies;
    
    showCompanies(companies);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getMembers(memberJson);

const cardContainer = document.querySelector("#card-container");

function showCompanies(companies) {
  companies.forEach((company) => {
    const div = document.createElement("div");
    div.classList.add("company");

    const img = document.createElement("img");
    img.setAttribute("src", company.image);
    img.setAttribute("alt", company.name);

    const h3 = document.createElement("h3");
    h3.textContent = company.name;

    const pAddress = document.createElement("p");
    pAddress.textContent = "Address: " + company.address;

    const pPhoneNumber = document.createElement("p");
    pPhoneNumber.textContent = "Phone Number: " + company.phoneNumber;

    const pWebsiteURL = document.createElement("p");
    pWebsiteURL.textContent = "Website URL: " + company.websiteURL;

    const pMembershipLevel = document.createElement("p");
    pMembershipLevel.textContent = "Membership Level: " + company.membershipLevel;

    const pAdvertisement = document.createElement("p");
    pAdvertisement.textContent = "Advertisement: " + (company.advertisement || "");

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(pAddress);
    div.appendChild(pPhoneNumber);
    div.appendChild(pWebsiteURL);
    div.appendChild(pMembershipLevel);
    div.appendChild(pAdvertisement);

    cardContainer.appendChild(div);
  });
}
  
  
    
