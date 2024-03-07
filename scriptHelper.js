// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    let inputValues = {}
    if(testInput === "" || testInput === undefined){
        return "Empty"
    } else if(isNaN(Number(testInput))){
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatus = document.getElementById("launchStatus");
    let readyForLaunch = true;

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required.");
        readyForLaunch = false;
    }

    if(!validateInput(pilot) === "Not a Number"){
        alert('pilot value should be a string');
        readyForLaunch = false;
    } else{
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot} is ready for launch`;
    }
    if(!validateInput(copilot) === "Not a Number"){
        alert('copilot value should be a string');
        readyForLaunch = false;
    } else{
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot} is ready for launch`;
    }
    if(validateInput(fuelLevel) === "Is a Number") {
        //alert('fuel level value should be a number');
        readyForLaunch = false;
    }
    if(validateInput(cargoLevel) === "Is a Number") {
        //alert('cargo level value should be a number');
        readyForLaunch = false;
    }
    if(fuelLevel < 10000){
        list.style.visibility = 'visible';
        document.getElementById("fuelStatus").textContent = `Fuel level too low for launch`;
        readyForLaunch = false;
    } else {
        list.style.visibility = 'visible';
        document.getElementById("fuelStatus").textContent = `Fuel level high enough for launch`;
    }
    if(cargoLevel > 10000){
        list.style.visibility = 'visible';
        document.getElementById("cargoStatus").textContent = 'Cargo mass too heavy for launch';
        readyForLaunch = false;
    } else{
        list.style.visibility = 'visible';
        document.getElementById("cargoStatus").textContent = 'Cargo mass low enough for launch';
    }
    
    launchStatus.textContent = readyForLaunch === true ? 'Shuttle is ready for launch' : 'Shuttle Not Ready for Launch';
    launchStatus.style.color = readyForLaunch ? 'green' : 'red';

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }

 /*
 window.addEventListener("load", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const list = document.getElementById("faultyItems");
        const pilot = document.querySelector("input[name=pilotName]");
        const copilot = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoLevel = document.querySelector("input[name=cargoMass]");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })
 }) */
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;