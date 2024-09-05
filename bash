#!/bin/bash

# Variables
REPO_NAME="smart-irrigation-system"
USERNAME="your-github-username"  # Replace with your GitHub username

# Initialize Git, add files, and commit
git init
git add .
git commit -m "Initial commit with irrigation calculator"

# Add remote repository and push
git remote add origin https://github.com/$USERNAME/$REPO_NAME.git
git branch -M main
git push -u origin main
