const spotlightJson = "https://edwell22.github.io/wdd230-3/chamber/data/spotlight.json";

  async function getAllMembers(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const companies = data.companies;
      
      showSpotlights(companies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  getAllMembers(spotlightJson);
  
  const spotlights = document.querySelector("#spotlights");
  
  function showSpotlights(companies) {
    companies.forEach((company) => {
      const div = document.createElement("div");
      div.classList.add("company");
  
      const h3 = document.createElement("h3");
      h3.textContent = company.name;
  
      const pAddress = document.createElement("p");
      pAddress.textContent = "Address: " + company.address;
  
      const pPhoneNumber = document.createElement("p");
      pPhoneNumber.textContent = "Phone Number: " + company.phoneNumber;
  
      const pWebsiteURL = document.createElement("p");
      const aWebsiteLink = document.createElement("a");
      aWebsiteLink.setAttribute("href", company.websiteURL);
      aWebsiteLink.textContent = "Website URL";
      pWebsiteURL.appendChild(aWebsiteLink);
  
      const img = document.createElement("img");
      img.setAttribute("src", company.image);
      img.setAttribute("alt", company.name);
  
      const pMembershipLevel = document.createElement("p");
      pMembershipLevel.textContent = "Membership Level: " + company.membershipLevel;
  
      const pAdvertisement = document.createElement("p");
      pAdvertisement.textContent = "Advertisement: " + company.advertisement;

      div.appendChild(h3);
      div.appendChild(img);
      div.appendChild(pAddress);
      div.appendChild(pPhoneNumber);
      div.appendChild(pWebsiteURL);
      div.appendChild(pMembershipLevel);
      div.appendChild(pAdvertisement);
  
      spotlights.appendChild(div);
    });
  }
   