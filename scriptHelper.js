// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById('missionTarget');
    //console.log('before: '+missionTargetDiv.innerHtml)
    missionTargetDiv.innerHTML = 
    `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">
    `;
    //console.log('after setting html')
    //console.log('after: '+missionTargetDiv.innerHtml.replace(/\s/g,''))
 }
 
 function validateInput(testInput) {
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
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    let readyForLaunch = true;

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required.");
        launchStatus.textContent = 'Awaiting Information Before Launch';
        list.style.visibility = 'hidden';
        launchStatus.style.color = 'black';
        return;
    }
    else{
        if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
            alert('Make sure to enter valid information for each field');
            launchStatus.textContent = 'Awaiting Information Before Launch';
            list.style.visibility = 'hidden';
            launchStatus.style.color = 'black';
            return;
        } else{
            pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
            copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;
            if(fuelLevel < 10000){
                list.style.visibility = 'visible';
                fuelStatus.textContent = `Fuel level too low for launch`;
                readyForLaunch = false;
            } else {
                list.style.visibility = 'visible';
                fuelStatus.textContent = `Fuel level high enough for launch`;
            }
            if(cargoLevel > 10000){
                list.style.visibility = 'visible';
                cargoStatus.textContent = 'Cargo mass too heavy for launch';
                readyForLaunch = false;
            } else{
                list.style.visibility = 'visible';
                cargoStatus.textContent = 'Cargo mass low enough for launch';
            }
        }
    }
    
    launchStatus.textContent = readyForLaunch === true ? 'Shuttle is Ready for Launch' : 'Shuttle Not Ready for Launch';
    launchStatus.style.color = readyForLaunch ? 'green' : 'red';
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => response.json());
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   return planets[Math.floor(Math.random() * planets.length)];
 }
 
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;