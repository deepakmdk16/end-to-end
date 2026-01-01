# Multi-stage build for optimized production image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies and vite for preview server
RUN npm ci --only=production && npm install -g vite

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vite.config.js ./vite.config.js

# Expose port 8080
EXPOSE 8080

# Set default PORT environment variable
ENV PORT=8080

# Start the application using vite preview
CMD ["sh", "-c", "vite preview --host 0.0.0.0 --port ${PORT}"]
