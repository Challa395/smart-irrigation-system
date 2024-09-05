function calculateIrrigation() {
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const cropWaterRequirement = parseFloat(document.getElementById('cropWaterRequirement').value);
    const fieldSize = parseFloat(document.getElementById('fieldSize').value);
    const evapotranspiration = parseFloat(document.getElementById('evapotranspiration').value);
    const irrigationEfficiency = parseFloat(document.getElementById('irrigationEfficiency').value) / 100;
    const recentRainfall = parseFloat(document.getElementById('recentRainfall').value);

    const desiredMoistureLevel = 30; // assuming a constant desired moisture level for simplicity
    const waterDeficit = Math.max(0, desiredMoistureLevel - soilMoisture);
    const waterDeficitMm = waterDeficit * 100; // convert percentage to mm (assumed depth of 100 mm)

    const totalWaterNeeded = cropWaterRequirement + evapotranspiration - recentRainfall;
    const effectiveWaterRequirement = totalWaterNeeded / irrigationEfficiency;
    const volumeNeeded = fieldSize * effectiveWaterRequirement;

    document.getElementById('result').innerHTML = `
        <h2>Calculation Results</h2>
        <p>Water Deficit: ${waterDeficitMm.toFixed(2)} mm</p>
        <p>Total Water Needed: ${totalWaterNeeded.toFixed(2)} mm/day</p>
        <p>Effective Water Requirement: ${effectiveWaterRequirement.toFixed(2)} mm/day</p>
        <p>Total Volume Needed: ${volumeNeeded.toFixed(2)} cubic meters</p>
    `;
}
