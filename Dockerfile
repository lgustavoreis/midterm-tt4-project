# Layer 1: Build the frontend
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app/ ./
RUN npm run build 
# The built files are in /app/dist

# Layer 2: Production image
FROM debian:bookworm-slim

# Install dependencies
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    nginx \
    nodejs \
    npm \
    gettext \
    && apt-get clean

# Install PM2 globally
RUN npm install -g pm2

# Set up the working directory for the API
WORKDIR /app

# Copy and install API dependencies
COPY ./api/index.js /app/
COPY ./api/package*.json /app/
RUN npm install

# Copy the built frontend files to the Nginx web root
COPY --from=builder ./app/dist /var/www/html

# Copy the Nginx configuration file
COPY ./default.conf /etc/nginx/sites-available/default

# Set environment variables
RUN echo "API_PORT=3000" >> /app/.env

# Expose port 80 for Nginx
EXPOSE 80

# Copy and set up the entrypoint script
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]