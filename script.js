// Write your JavaScript code here!

//const { myFetch, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", async function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })

    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const list = document.getElementById("faultyItems");
        const pilot = document.querySelector("input[name=pilotName]").value;
        const copilot = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoLevel);
    })
    
 });