# Stage 1: Build the Node.js application

# Use the Node 14 image
FROM node:14 as build

# Set /app as the working directory
WORKDIR /app

# Copy json files over earlier in order for quicker build times due to Docker's caching
COPY package*.json .

# Copy the remaining project file(s) over
COPY . .

# Install node dependencies at Docker build time
RUN npm install

# Expose port 3000 for the application
EXPOSE 3000

# Run the Node.js application
CMD ["node", "index.js"]