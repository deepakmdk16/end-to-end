# Build stage - needs ALL dependencies including devDependencies
FROM node:20-slim AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage - serve static files with 'serve'
FROM node:20-slim
WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Install serve globally to serve static files
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Set PORT environment variable
ENV PORT=8080

# Serve the built static files from dist folder
CMD ["serve", "-s", "dist", "-l", "8080"]
