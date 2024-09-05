function calculateIrrigation() {
    // Gather input values
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const cropWaterRequirement = parseFloat(document.getElementById('cropWaterRequirement').value);
    const fieldSize = parseFloat(document.getElementById('fieldSize').value);
    const evapotranspiration = parseFloat(document.getElementById('evapotranspiration').value);
    const irrigationEfficiency = parseFloat(document.getElementById('irrigationEfficiency').value) / 100;
    const recentRainfall = parseFloat(document.getElementById('recentRainfall').value);

    // Constants
    const desiredMoistureLevel = 30; // desired moisture level in percentage

    // Calculate water deficit
    const waterDeficit = Math.max(0, desiredMoistureLevel - soilMoisture);
    const waterDeficitMm = waterDeficit * 100; // Convert percentage to mm (assuming a depth of 100 mm)

    // Calculate total water needed
    const totalWaterNeeded = cropWaterRequirement + evapotranspiration - recentRainfall;

    // Adjust for irrigation system efficiency
    const effectiveWaterRequirement = totalWaterNeeded / irrigationEfficiency;

    // Calculate total volume needed
    const volumeNeeded = fieldSize * effectiveWaterRequirement;

    // Display results
    document.getElementById('result').innerHTML = `
        <h2>Calculation Results</h2>
        <p><strong>Water Deficit:</strong> ${waterDeficitMm.toFixed(2)} mm</p>
        <p><strong>Total Water Needed:</strong> ${totalWaterNeeded.toFixed(2)} mm/day</p>
        <p><strong>Effective Water Requirement:</strong> ${effectiveWaterRequirement.toFixed(2)} mm/day</p>
        <p><strong>Total Volume Needed:</strong> ${volumeNeeded.toFixed(2)} cubic meters</p>
    `;
}
