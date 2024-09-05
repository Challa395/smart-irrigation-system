#!/bin/bash

# Define the directory and file names
PROJECT_DIR="smart_irrigation_system"
HTML_FILE="index.html"
CSS_FILE="styles.css"
JS_FILE="scripts.js"

# Create the project directory
mkdir -p "$PROJECT_DIR"

# Create HTML file
cat <<EOL > "$PROJECT_DIR/$HTML_FILE"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Irrigation System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Smart Irrigation System</h1>
    </header>

    <main>
        <section id="input-section">
            <h2>Enter Input Data</h2>
            <form id="irrigation-form">
                <label for="soil-moisture">Soil Moisture (%)</label>
                <input type="number" id="soil-moisture" name="soil
