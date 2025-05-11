#!/bin/bash
echo "Building static version of website for cPanel hosting..."

# Build the static site
NODE_ENV=production npx vite build

# Create a zip file of the dist/public directory
cd dist
zip -r ../static-build.zip public

echo "Build complete! Your static site has been generated in dist/public/ and zipped as static-build.zip"
echo "Upload the contents of the dist/public/ directory to your cPanel public_html folder"