function calculateIrrigation() {
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const cropWaterReq = parseFloat(document.getElementById('waterReq').value);
    const fieldSize = parseFloat(document.getElementById('fieldSize').value);
    const irrigationEfficiency = parseFloat(document.getElementById('efficiency').value) / 100;

    // Sample calculation for water deficit
    const waterDeficit = cropWaterReq - soilMoisture;
    const totalWaterNeeded = waterDeficit > 0 ? waterDeficit * fieldSize * 10 : 0; // in mm
    const effectiveWaterRequirement = totalWaterNeeded / irrigationEfficiency;
    const totalVolumeNeeded = effectiveWaterRequirement * 1000; // converting to liters

    // Display results
    document.getElementById('irrigationResult').textContent = waterDeficit > 0 ? "Irrigation Needed" : "No Irrigation Needed";
    document.getElementById('waterDeficit').textContent = Water Deficit: ${waterDeficit} mm/day;
    document.getElementById('totalWaterNeeded').textContent = Total Water Needed: ${totalWaterNeeded.toFixed(2)} mm;
    document.getElementById('effectiveWaterRequirement').textContent = Effective Water Requirement: ${effectiveWaterRequirement.toFixed(2)} mm;
    document.getElementById('totalVolumeNeeded').textContent = Total Volume Needed: ${totalVolumeNeeded.toFixed(2)} liters;
}
