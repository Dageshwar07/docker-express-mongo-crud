# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
