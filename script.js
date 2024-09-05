document.getElementById("irrigation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const soilMoisture = document.getElementById("soil-moisture").value;
    const cropType = document.getElementById("crop-type").value;
    const waterLevel = document.getElementById("water-level").value;
    const weatherCondition = document.getElementById("weather-condition").value;

    let irrigationNeeded;
    let waterRequired;

    // Logic to determine irrigation needs
    if (soilMoisture < 40 && weatherCondition !== "rainy") {
        irrigationNeeded = "Yes, irrigation is needed.";
    } else {
        irrigationNeeded = "No irrigation needed at the moment.";
    }

    // Logic to calculate water required
    switch(cropType) {
        case "wheat":
            waterRequired = soilMoisture < 40 ? 50 : 0; // in liters
            break;
        case "rice":
            waterRequired = soilMoisture < 40 ? 70 : 0; // in liters
            break;
        case "corn":
            waterRequired = soilMoisture < 40 ? 60 : 0; // in liters
            break;
        default:
            waterRequired = 0;
    }

    if (waterLevel < waterRequired) {
        irrigationNeeded += " However, insufficient water in the field.";
    }

    // Display results
    document.getElementById("irrigation-needed").textContent = irrigationNeeded;
    document.getElementById("water-required").textContent = Water required: ${waterRequired} liters;
});
