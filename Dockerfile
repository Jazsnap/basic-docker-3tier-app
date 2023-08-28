# Use the official NGINX image as the base image
FROM nginx:alpine

# Create a non-root user named "nginxuser"
# RUN adduser -D nginxuser

# Change ownership of /var/cache/nginx to the non-root user
# RUN chown -R nginxuser /var/cache/nginx

# Copy the static HTML file to the NGINX html directory
COPY static-html-directory /usr/share/nginx/html

# Set the working directory to NGINX's default directory
WORKDIR /etc/nginx

# Change ownership of copied files to the non-root user
# RUN chown -R nginxuser:nginxuser /etc/nginx

# Expose ports 80 and 443
EXPOSE 80
EXPOSE 443

# Switch to the non-root user
#USER nginxuser

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
