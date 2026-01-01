# Multi-stage build for optimized production image

# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image with serve
FROM node:18-alpine

WORKDIR /app

# Install serve globally for serving static files
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/build ./build

# Expose port 8080 (default)
EXPOSE 8080

# Set default PORT environment variable
ENV PORT=8080

# Start the application using serve with PORT environment variable
CMD serve -s build -l $PORT
