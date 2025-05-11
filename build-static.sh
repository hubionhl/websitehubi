#!/bin/bash
echo "Building static version of website for cPanel hosting..."

# Verify all assets are in place
./verify-assets.sh
if [ $? -ne 0 ]; then
  echo "❌ Asset verification failed. Please fix the issues above before building."
  exit 1
fi

# Build the static site
echo "Starting build process..."
NODE_ENV=production npx vite build

# Create a static deployment folder for easier access
mkdir -p static-deploy
cp -r dist/public/* static-deploy/

# Create a zip file of the static site
cd static-deploy
zip -r ../hubi-website.zip .

cd ..
echo "==============================================="
echo "✅ Build complete!"
echo "==============================================="
echo "Your static site has been:"
echo "1. Generated in the 'dist/public' directory"
echo "2. Copied to the 'static-deploy' directory"
echo "3. Compressed as 'hubi-website.zip'"
echo ""
echo "DEPLOYMENT INSTRUCTIONS:"
echo "1. Log in to your cPanel account"
echo "2. Navigate to File Manager and open your public_html folder"
echo "3. Upload and extract the 'hubi-website.zip' file there"
echo "4. Make sure the index.html file is in the root directory"
echo "==============================================="