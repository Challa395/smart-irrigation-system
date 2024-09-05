// Function to simulate soil moisture monitoring
function checkSoilMoisture() {
    // Get the soil moisture input value from the user
    let moistureLevel = document.getElementById("moistureInput").value;

    // Display feedback based on soil moisture levels
    let resultText;
    if (moistureLevel >= 70) {
        resultText = "Soil moisture is high. No need to water the crops.";
    } else if (moistureLevel >= 40) {
        resultText = "Soil moisture is moderate. Consider watering soon.";
    } else {
        resultText = "Soil moisture is low. Watering the crops is necessary.";
    }

    // Display the result in the webpage
    document.getElementById("result").innerHTML = resultText;
}

// Function to display current date and time dynamically
function displayDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerHTML = now.toLocaleString();
}

// Run the date/time function every second
setInterval(displayDateTime, 1000);
