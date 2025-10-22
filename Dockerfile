# Use official Nginx image as the base
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx website files
RUN rm -rf ./*

# Copy your static website files into the container
COPY . .

# Expose port 80 (Nginx default)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
