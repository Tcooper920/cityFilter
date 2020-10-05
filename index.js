/* Sorting through city information */

let userInputText = document.getElementsByClassName("city-input")[0];
let cityContainer = document.getElementsByClassName("city-container")[0];
const ascendingDescendingPopulationButton = document.getElementsByClassName("ascending-descending-population-btn")[0];

const cities = [
  { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
  { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
  { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
  { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
  { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },
];

// Sort by population
cities.sort((a, b) => a.population - b.population);

// Populate page with city info
const listAllMyCities = (allCities) => {
	const cityList = allCities.map(allCities => {
		return `<div class='city-information'>
				<span class='bold'>City:</span> ${allCities.name}<br>
				<span class='bold'>Population:</span> ${allCities.population}<br>
				<span class='bold'>Popular Landmark:</span> ${allCities.landmark}</div>`;
	});

	cityContainer.innerHTML += cityList.join("");
}

listAllMyCities(cities);

// Ascending/Descending button click
ascendingDescendingPopulationButton.addEventListener("click", function () {
	cities.reverse();
	filterCities();
});

// Filter
let filterCities = () => {
	const dropdownOption = document.getElementsByClassName("filter-option")[0].value;
	const inputFieldText = userInputText.value.toLowerCase();
	
	// Dropdown choices
	if (dropdownOption === "Name") {
		var filteredCityArray = cities.filter(city => city.name.toLowerCase().includes(inputFieldText));
	} 
	if (dropdownOption === "Landmark") {
		var filteredCityArray = cities.filter(city => city.landmark.toLowerCase().includes(inputFieldText));
	}
	
	cityContainer.innerHTML = "";
	
	if (filteredCityArray.length !== 0) {	
		filteredCityArray.forEach(function (filteredCityArray) {
			cityContainer.innerHTML += 
				`<div class='city-information'>
				<span class='bold'>City:</span> ${filteredCityArray.name}<br>
				<span class='bold'>Population:</span> ${filteredCityArray.population}<br>
				<span class='bold'>Popular Landmark:</span> ${filteredCityArray.landmark}</div>`;
		});
	}
}

document.addEventListener("keyup", filterCities);

