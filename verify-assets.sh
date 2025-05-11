#!/bin/bash
echo "Verifying all assets are in place..."

# Check for required asset files
required_files=(
  "client/public/assets/hubi-happy.jpeg"
  "client/public/assets/hubi-image-1.jpeg"
  "client/public/assets/hubi-logo.jpeg"
  "client/public/assets/liquidlaunch-logo.png"
  "client/public/.htaccess"
)

missing_files=()

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    missing_files+=("$file")
  fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
  echo "✅ All required assets are in place"
else
  echo "❌ Missing files:"
  for file in "${missing_files[@]}"; do
    echo "   - $file"
  done
  exit 1
fi

echo "All checks passed! Ready to build the static site."