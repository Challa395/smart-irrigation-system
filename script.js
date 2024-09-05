function calculateWaterRequirement(soilMoisture, cropType, weatherCondition, area) {
    // Set crop water requirements in liters per square foot
    const cropWaterNeeds = {
        "wheat": 0.6,
        "rice": 1,
        "corn": 0.8,
        "soybeans": 0.7,
        "cotton": 0.5,
        "sugarcane": 1.2,
        "barley": 0.4,
        "tomatoes": 0.9,
        "potatoes": 0.75,
        "lettuce": 0.65
    };

    // Check if irrigation is needed
    if (soilMoisture >= 30) {
        return {
            irrigationNeeded: false,
            waterAmount: 0
        };
    }

    // Modify water needs based on weather
    let weatherMultiplier;
    switch (weatherCondition) {
        case 'sunny':
            weatherMultiplier = 1.2;
            break;
        case 'cloudy':
            weatherMultiplier = 0.9;
            break;
        case 'rainy':
            weatherMultiplier = 0.5;
            break;
        default:
            weatherMultiplier = 1;
    }

    // Calculate water amount
    const waterAmount = cropWaterNeeds[cropType] * weatherMultiplier * area;
    
    return {
        irrigationNeeded: true,
        waterAmount: waterAmount.toFixed(2) // round to 2 decimal places
    };
}
