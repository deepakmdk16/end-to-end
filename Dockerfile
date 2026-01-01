# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY calculator-react/package*.json ./

# Install dependencies
RUN npm ci --only=production --ignore-scripts

# Copy all source files
COPY calculator-react/ ./

# Build the application
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration that listens on $PORT
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose port 8080 (default)
EXPOSE 8080

# Start nginx - it will substitute $PORT in the config template
CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
