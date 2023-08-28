# Stage 1: Build the Node.js application

# Use the Node 14 image
FROM node:14 as build

# Set /app as the working directory
WORKDIR /app

# Copy json files over earlier in order for quicker build times due to Docker's caching
COPY package*.json .

# Install node dependencies at Docker build time
RUN npm install

# Copy the remaining project file(s) over
COPY . .

# Stage 2: Create a minimal runtime image

# Use apline:3.18 as a lightweight image
FROM alpine:3.18

# Create a non-root user
RUN adduser -D web-user

# Set /app as the working directory
WORKDIR /app

# Copy the application files and package.json over
COPY --from=build /app .

# Install Node.js in the runtime image
RUN apk --no-cache add nodejs

# Expose port 3000 for the application
EXPOSE 3000

# Set the user for the CMD
USER web-user

# Run the Node.js application
CMD ["node", "server.js"]

# Run a healthcheck every 30 seconds
HEALTHCHECK --interval=30s --timeout=5s CMD node healthcheck.js
