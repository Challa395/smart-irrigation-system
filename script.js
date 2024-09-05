function calculate() {
    const soilMoisture = document.getElementById('soil-moisture').value;
    const cropType = document.getElementById('crop-type').value;
    const weather = document.getElementById('weather').value;
    const area = document.getElementById('area').value;

    if (soilMoisture === '' || area === '') {
        alert('Please fill out all the fields.');
        return;
    }

    const cropWaterRequirement = {
        wheat: 1.2,
        corn: 1.5,
        rice: 2.0,
        cotton: 1.4,
        soybean: 1.3,
        potato: 1.1,
        sugarcane: 2.5,
        tomato: 1.0,
        barley: 1.2,
        sorghum: 1.3
    };

    const weatherMultiplier = {
        sunny: 1.2,
        cloudy: 1.0,
        rainy: 0.8
    };

    let irrigationNeeded = false;
    if (soilMoisture < 50) {
        irrigationNeeded = true;
    }

    const waterRequirementPerSqFt = cropWaterRequirement[cropType] * weatherMultiplier[weather];
    const totalWaterRequired = (waterRequirementPerSqFt * area).toFixed(2);

    let resultText = '';
    if (irrigationNeeded) {
        resultText = Irrigation is needed. Use approximately ${totalWaterRequired} liters of water.;
    } else {
        resultText = 'Irrigation is not needed at the moment.';
    }

    document.getElementById('result').innerHTML = resultText;
}
