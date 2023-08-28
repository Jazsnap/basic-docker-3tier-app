# Use the official NGINX image as the base image
FROM nginx:alpine3.18

# Create a non-root user named "nginxuser" and perform ownership changes in a single RUN instruction /run is needed for nginx.pid
RUN adduser -D nginxuser && \
    chown -R nginxuser /var/cache/nginx /run /etc/nginx && \
    chmod -R g+rwx /var/cache/nginx /run /etc/nginx

# Copy the static HTML file to the NGINX html directory
COPY static-html-directory /usr/share/nginx/html

# Set the working directory to NGINX's default directory
WORKDIR /etc/nginx

# Expose ports 80 and 443
EXPOSE 80
EXPOSE 443

# Switch to the non-root user
USER nginxuser

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]

# Run a healthcheck every 30 seconds
HEALTHCHECK --interval=30s --timeout=5s CMD node healthcheck.js