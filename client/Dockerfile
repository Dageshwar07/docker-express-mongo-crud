# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
