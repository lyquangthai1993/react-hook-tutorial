# Build reactjs app with production mode
npm run build

# Clone index.html into 200.html
cp ./build/index.html ./build/200.html

# Start deploying via Surge
# The command means deploy current folder to domain paul-photo-app.surge.sh
surge ./build thaily-react-hook.surge.sh