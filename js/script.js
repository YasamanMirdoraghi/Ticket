﻿
let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
  Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
  US: ["Los Angles", "San Diego", "Chicago"],
};

countrySelectBox.addEventListener("change", function () {

  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option> Select City </option>";
  } else {
    let mainCountryName = countrySelectBox.value; 
    let mainCountryCities = countriesData[mainCountryName];
    //reset
    citySelect.innerHTML = "";  
    //select
    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});
