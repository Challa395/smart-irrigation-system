#!/bin/bash

# Variables
REPO_NAME="smart-irrigation-system"
DESCRIPTION="A simple smart irrigation system calculator"
USERNAME="your-github-username"  # Replace with your GitHub username
EMAIL="your-email@example.com"  # Replace with your email
GITHUB_URL="https://github.com/$USERNAME/$REPO_NAME.git"

# Step 1: Create a new GitHub repository via GitHub CLI
echo "Creating new GitHub repository..."
gh repo create $REPO_NAME --public --description "$DESCRIPTION" --confirm

# Step 2: Clone the new repository
echo "Cloning the repository..."
git clone $GITHUB_URL
cd $REPO_NAME

# Step 3: Create index.html
cat <<EOL > index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Irrigation Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Smart Irrigation Calculator</h1>
    <form id="irrigationForm">
        <label for="soilMoisture">Current Soil Moisture Level (%):</label>
        <input type="number" id="soilMoisture" name="soilMoisture" step="0.1" required><br><br>

        <label for="cropType">Crop Type:</label>
        <select id="cropType" name="cropType">
            <option value="corn">Corn</option>
            <option value="wheat">Wheat</option>
        </select><br><br>

        <label for="cropWaterRequirement">Crop Water Requirement (mm/day):</label>
        <input type="number" id="cropWaterRequirement" name="cropWaterRequirement" step="0.1" required><br><br>

        <label for="fieldSize">Field Size (hectares):</label>
        <input type="number" id="fieldSize" name="fieldSize" step="0.01" required><br><br>

        <label for="evapotranspiration">Evapotranspiration (ET) (mm/day):</label>
        <input type="number" id="evapotranspiration" name="evapotranspiration" step="0.1" required><br><br>

        <label for="soilType">Soil Type:</label>
        <select id="soilType" name="soilType">
            <option value="loamy">Loamy</option>
            <option value="sandy">Sandy</option>
            <option value="clay">Clay</option>
        </select><br><br>

        <label for="irrigationEfficiency">Irrigation System Efficiency (%):</label>
        <input type="number" id="irrigationEfficiency" name="irrigationEfficiency" step="0.1" required><br><br>

        <label for="recentRainfall">Recent Rainfall (mm):</label>
        <input type="number" id="recentRainfall" name="recentRainfall" step="0.1" required><br><br>

        <button type="button" onclick="calculateIrrigation()">Calculate</button>
    </form>

    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
EOL

# Step 4: Create styles.css (optional)
cat <<EOL > styles.css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}
h1 {
    color: #333;
}
label {
    display: block;
    margin-top: 10px;
}
input, select {
    margin-bottom: 10px;
}
button {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
EOL

# Step 5: Create script.js
cat <<EOL > script.js
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

    document.getElementById('result').innerHTML = \`
        <h2>Calculation Results</h2>
        <p>Water Deficit: \${waterDeficitMm.toFixed(2)} mm</p>
        <p>Total Water Needed: \${totalWaterNeeded.toFixed(2)} mm/day</p>
        <p>Effective Water Requirement: \${effectiveWaterRequirement.toFixed(2)} mm/day</p>
        <p>Total Volume Needed: \${volumeNeeded.toFixed(2)} cubic meters</p>
    \`;
}
EOL

# Step 6: Initialize Git, add files, and commit
echo "Initializing Git repository..."
git add .
git commit -m "Initial commit with irrigation calculator files"

# Step 7: Push to GitHub
echo "Pushing changes to GitHub..."
git push origin main

# Step 8: Enable GitHub Pages
echo "Enabling GitHub Pages..."
gh repo edit --homepage "https://$USERNAME.github.io/$REPO_NAME/"

# Finish
echo "Setup complete! Your webpage is live at: https://$USERNAME.github.io/$REPO_NAME/"
