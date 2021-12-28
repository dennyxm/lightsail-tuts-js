# Use the node:alpine image as the base image
FROM node:alpine
 
# Copy the package.json file to the image
COPY package.json package.json
# Install required packages
RUN npm install
 
# Expose the required port in the image
EXPOSE 8080
 
# Copy any other necessary files
COPY . .
 
# Command to run the program
CMD ["npm", "start"]