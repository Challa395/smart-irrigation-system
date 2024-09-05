document.getElementById('irrigationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const cropType = document.getElementById('cropType').value;
    const weatherCondition = document.getElementById('weather').value;
    const area = parseFloat(document.getElementById('area').value);

    const result = calculateWaterRequirement(soilMoisture, cropType, weatherCondition, area);

    const resultDiv = document.getElementById('result');
    if (result.irrigationNeeded) {
        resultDiv.innerHTML = Irrigation needed. Use ${result.waterAmount} liters of water.;
    } else {
        resultDiv.innerHTML = No irrigation needed.;
    }
});
