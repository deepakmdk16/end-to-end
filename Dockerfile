# Build stage - needs ALL dependencies including devDependencies
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY calculator-react/package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source files
COPY calculator-react/ ./

# Build the application
RUN npm run build

# Production stage - serve the built files
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY calculator-react/package*.json ./

# Install dependencies including serve
RUN npm ci --only=production && npm install serve

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Expose port 8080 (default)
EXPOSE 8080

# Set default PORT environment variable
ENV PORT=8080

# Start the application
CMD ["npm", "start"]
