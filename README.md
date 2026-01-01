# Calculator App

A modern, responsive calculator web application built with React, featuring a beautiful user interface and full keyboard support.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Modulo Operation**: Calculate remainders
- **Decimal Support**: Perform calculations with decimal numbers
- **Keyboard Support**: Use your keyboard for faster input
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Prevents division by zero
- **Clean UI**: Modern gradient background with smooth animations
- **React Hooks**: Built with modern React patterns using custom hooks

## Quick Start

### Running Locally

1. Navigate to the calculator-react directory:
```bash
cd calculator-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
cd calculator-react
npm run build
npm start
```

## Usage

### Mouse/Touch Controls

- Click number buttons (0-9) to input numbers
- Click operator buttons (+, −, ×, ÷, %) to select operations
- Click **=** to calculate the result
- Click **AC** to clear all
- Click **DEL** to delete the last digit

### Keyboard Shortcuts

- **Numbers**: 0-9
- **Decimal Point**: .
- **Operators**: +, -, *, /, %
- **Calculate**: Enter or =
- **Delete**: Backspace
- **Clear All**: Escape

## Technical Details

### Tech Stack

- **React 19**: Modern UI library with latest features
- **Vite 7**: Next-generation frontend build tool
- **Custom Hooks**: Clean separation of logic and UI with useCalculator hook

### Project Structure

```
calculator-react/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx
│   │   └── Calculator.css
│   ├── hooks/
│   │   └── useCalculator.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

### Architecture

- **useCalculator Hook**: Custom hook that manages calculator state and operations
- **Calculator Component**: Main component that renders the UI
- **Event Handlers**: Handle user input from buttons and keyboard
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

## Docker Deployment

The application can be deployed using Docker with Cloud Run compatibility.

### Building and Running with Docker

```bash
# Build the Docker image
docker build -t calculator-app .

# Run with custom port (default is 8080)
docker run -p 8080:8080 -e PORT=8080 calculator-app

# Run on a different port
docker run -p 3000:3000 -e PORT=3000 calculator-app
```

### Dockerfile Features

- **Multi-stage build**: Optimized for minimal image size
- **Node 20**: Required for Vite 7.x support
- **Production dependencies**: Includes serve package for static file serving
- **Configurable PORT**: Respects $PORT environment variable (required for Cloud Run)
- **Fast builds**: Optimized layer caching with proper .dockerignore

### Deploying to Google Cloud Run

```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/PROJECT_ID/calculator-app

# Deploy to Cloud Run
gcloud run deploy calculator-app \
  --image gcr.io/PROJECT_ID/calculator-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

Cloud Run will automatically set the PORT environment variable, and the app will listen on that port.

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

Open source and free to use.
