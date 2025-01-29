const lastModified = new Date(document.lastModified);
const year = document.querySelector('.year');
const copyRight = document.querySelector('.rights');
const modifiedYearAndTime = document.querySelector('.datemodified');
const temperature = 10;
const windSpeed = 7;
const windChillTemperature = document.querySelector('.temperature');
windChillTemperature.textContent = `Temperature: ${temperature}°C`;
const windChillCalculation = document.querySelector('.windchill');
const windChillSpeed = document.querySelector('.speed');
windChillSpeed.textContent = `Wind Speed: ${windSpeed}Km/h`;
copyRight.textContent = `All Rights Reserved`
year.textContent = lastModified.getFullYear();
modifiedYearAndTime.textContent = `Last Modified on: ${lastModified.toUTCString()}`;
function calculateWindChill(temperature, windSpeed){
   if(temperature <= 10 && windSpeed > 4.8){
    const windChill = 13.12+0.6215*(temperature)-11.37*(windSpeed)**0.16+0.3965*(temperature)*(windSpeed)**0.16
    const formattedWindchill = windChill.toFixed(1);  
    windChillCalculation.textContent = `Wind Chill: ${formattedWindchill}°C`;
   }else{
    windChillCalculation.textContent = `Wind Chill: N/A`;
   }
}
calculateWindChill(temperature, windSpeed);
