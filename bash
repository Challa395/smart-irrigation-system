#!/bin/bash

# Variables
REPO_NAME="smart-irrigation-system"  # Replace with your repository name
USERNAME="your-github-username"  # Replace with your GitHub username

# Initialize Git repository
git init

# Add files to the repository
git add .

# Commit the files
git commit -m "Initial commit with irrigation calculator"

# Add the remote repository
git remote add origin https://github.com/$USERNAME/$REPO_NAME.git

# Push to the main branch
git branch -M main
git push -u origin main

echo "Files pushed to GitHub repository successfully."
