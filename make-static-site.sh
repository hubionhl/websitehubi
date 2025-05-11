#!/bin/bash
echo "Creating static snapshot of $HUBI website..."

# Create output directory
mkdir -p static-site
mkdir -p static-site/assets

# Copy the .htaccess file
cp client/public/.htaccess static-site/

# Copy all assets
cp -r client/public/assets/* static-site/assets/

# Use curl to capture the HTML content
curl -s http://localhost:5000 > static-site/index.html

# Extract all CSS and JS files from the HTML
CSSFILES=$(grep -o 'href="[^"]*\.css[^"]*"' static-site/index.html | sed 's/href="\([^"]*\)"/\1/')
JSFILES=$(grep -o 'src="[^"]*\.js[^"]*"' static-site/index.html | sed 's/src="\([^"]*\)"/\1/')

# Create directories for assets
mkdir -p static-site/assets
mkdir -p static-site/static/css
mkdir -p static-site/static/js

# Download all CSS and JS files
for file in $CSSFILES; do
  dir=$(dirname "$file")
  mkdir -p "static-site/$dir"
  curl -s "http://localhost:5000$file" > "static-site/$file"
done

for file in $JSFILES; do
  dir=$(dirname "$file")
  mkdir -p "static-site/$dir"
  curl -s "http://localhost:5000$file" > "static-site/$file"
done

# Fix paths in the HTML file
sed -i 's#"/#"./#g' static-site/index.html

# Create a zip file
cd static-site
zip -r ../hubi-static-site.zip .

cd ..
echo "===========================================" 
echo "✅ Static site created successfully!" 
echo "===========================================" 
echo "Your static site has been:" 
echo "1. Generated in the 'static-site' directory" 
echo "2. Compressed as 'hubi-static-site.zip'" 
echo "" 
echo "DEPLOYMENT INSTRUCTIONS:" 
echo "1. Log in to your cPanel account" 
echo "2. Navigate to File Manager and open your public_html folder" 
echo "3. Upload and extract the 'hubi-static-site.zip' file there" 
echo "4. Make sure the index.html file is in the root directory" 
echo "===========================================" 