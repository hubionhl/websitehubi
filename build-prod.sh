#!/bin/bash
echo "Building production version of $HUBI website..."

# Build the production version
NODE_ENV=production npx vite build

# Copy the .htaccess file to the dist/public directory
cp client/public/.htaccess dist/public/

# Create a ZIP archive of the dist/public directory
cd dist/public
zip -r ../../hubi-website-prod.zip .

cd ../..
echo "===========================================" 
echo "✅ Production build completed successfully!" 
echo "===========================================" 
echo "Your production build has been:" 
echo "1. Generated in the 'dist/public' directory" 
echo "2. Compressed as 'hubi-website-prod.zip'" 
echo "" 
echo "DEPLOYMENT INSTRUCTIONS:" 
echo "1. Download the 'hubi-website-prod.zip' file from this Replit" 
echo "2. Log in to your cPanel account" 
echo "3. Navigate to File Manager and open your public_html folder" 
echo "4. Upload and extract the ZIP file there" 
echo "5. Make sure the index.html file is in the root directory" 
echo "===========================================" 