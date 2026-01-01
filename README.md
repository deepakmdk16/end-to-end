# React Calculator App

A modern, responsive calculator web application built with React and Vite, featuring a beautiful user interface and full keyboard support.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Modulo Operation**: Calculate remainders
- **Decimal Support**: Perform calculations with decimal numbers
- **Keyboard Support**: Use your keyboard for faster input
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Prevents division by zero
- **Clean UI**: Modern gradient background with smooth animations
- **React Hooks**: Built with modern React using functional components and hooks

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
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

## Docker Deployment

The application includes a production-ready Dockerfile for containerized deployment.

### Build Docker Image

```bash
docker build -t react-calculator .
```

### Run Docker Container

```bash
docker run -p 8080:8080 -e PORT=8080 react-calculator
```

The application will be available at `http://localhost:8080`

### Cloud Run Deployment

The Dockerfile is configured to work with Google Cloud Run and other cloud platforms that use the `PORT` environment variable:

```bash
# Deploy to Cloud Run
gcloud run deploy react-calculator \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Technical Details

### Tech Stack

- **React 18** - UI library with hooks
- **Vite 6** - Fast build tool and dev server
- **CSS3** - Modern styling with gradients and animations

### Project Structure

```
├── src/
│   ├── components/
│   │   ├── Calculator.jsx      # Main calculator component
│   │   └── Calculator.css      # Calculator styles
│   ├── App.jsx                 # App component
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── Dockerfile                 # Production Docker image

```

### Architecture

The calculator is built using React functional components with hooks:

- **useState**: Manages calculator state (operands, operation, display)
- **useEffect**: Handles keyboard event listeners
- **Component Architecture**: Single Calculator component with clean separation of concerns
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

### Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Environment Variables

- `PORT` - Port number for the server (default: 8080)

## License

Open source and free to use.
