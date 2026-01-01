# Calculator App - React

A modern, responsive calculator web application built with React and Vite, featuring a beautiful user interface and full keyboard support.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Modulo Operation**: Calculate remainders
- **Decimal Support**: Perform calculations with decimal numbers
- **Keyboard Support**: Use your keyboard for faster input
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Prevents division by zero
- **Clean UI**: Modern gradient background with smooth animations
- **Built with React**: Modern component-based architecture
- **Vite**: Lightning-fast HMR and build tooling

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment

Build and run with Docker:

```bash
# Build the Docker image
docker build -t calculator-app .

# Run the container
docker run -p 8080:8080 calculator-app
```

The application will be available at `http://localhost:8080`

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

- **React 19**: Modern UI library with hooks
- **Vite 7**: Next-generation frontend tooling
- **CSS3**: Custom styling with flexbox and grid

### Project Structure

```
calculator-app/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx       # Main calculator component
│   │   └── Calculator.css       # Calculator styles
│   ├── App.jsx                  # Root app component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── Dockerfile                   # Docker configuration
└── package.json                # Dependencies and scripts
```

### Architecture

The calculator is built using React with functional components and hooks:

- **useState**: Manages calculator state (operands, operation)
- **useEffect**: Handles keyboard event listeners
- **Component-based**: Modular and maintainable code structure
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

### Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Deployment

The application includes a production-ready Dockerfile with multi-stage builds:

1. **Build stage**: Installs dependencies and builds the React app
2. **Production stage**: Serves static files using `serve` package

The container listens on port 8080 and is ready for deployment to:
- Google Cloud Run
- AWS ECS
- Azure Container Instances
- Any Docker-compatible platform

## License

Open source and free to use.
