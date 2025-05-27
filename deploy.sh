#!/bin/bash

# Add all changes
git add .

# Prompt for commit message
echo "Enter commit message:"
read message

# Commit changes
git commit -m "$message"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy

echo "Deployment complete! Your portfolio is live at: https://showmya16.github.io/portfolio" 