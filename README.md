# Scientific Calculator App - React

A modern, responsive scientific calculator web application with basic and advanced modes, built with React and featuring a beautiful user interface with full keyboard support.

## Features

### Basic Calculator Mode
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Modulo Operation**: Calculate remainders
- **Decimal Support**: Perform calculations with decimal numbers
- **Error Handling**: Prevents division by zero
- **Keyboard Support**: Use your keyboard for faster input

### Scientific Calculator Mode
- **Trigonometric Functions**: sin, cos, tan, asin, acos, atan
- **Angle Modes**: Toggle between degrees (DEG) and radians (RAD)
- **Logarithmic Functions**: log (base 10), ln (natural log), e^x
- **Power Functions**: x^y, x², x³, √x
- **Special Functions**: factorial (n!), 1/x, absolute value
- **Constants**: π (Pi), e (Euler's number)
- **Memory Functions**: MC, MR, MS, M+, M-
- **Memory Indicator**: Visual indicator when memory is in use

### General Features
- **Mode Toggle**: Seamlessly switch between Basic and Scientific modes
- **Responsive Design**: Adapts beautifully to desktop, tablet, and mobile devices
- **Modern UI**: Purple gradient background with smooth animations
- **Keyboard Support**: Full keyboard input support for quick calculations
- **React-Powered**: Built with React 19 and Vite 7 for optimal performance

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
docker build -t scientific-calculator-app .

# Run the container
docker run -p 8080:8080 scientific-calculator-app
```

The application will be available at `http://localhost:8080`

## Usage

### Mode Selection

Use the toggle buttons at the top to switch between:
- **Basic Mode**: Standard calculator with essential operations
- **Scientific Mode**: Advanced calculator with scientific functions

### Basic Calculator Operations

**Mouse/Touch Controls:**
- Click number buttons (0-9) to input numbers
- Click operator buttons (+, −, ×, ÷, %) to select operations
- Click **=** to calculate the result
- Click **AC** to clear all
- Click **DEL** to delete the last digit

**Keyboard Shortcuts:**
- **Numbers**: 0-9
- **Decimal Point**: .
- **Operators**: +, -, *, /, %
- **Calculate**: Enter or =
- **Delete**: Backspace
- **Clear All**: Escape

### Scientific Calculator Functions

**Trigonometric Functions:**
- **sin, cos, tan**: Calculate trigonometric values
- **asin, acos, atan**: Calculate inverse trigonometric values
- **DEG/RAD Toggle**: Switch between degree and radian modes

**Mathematical Functions:**
- **√x**: Square root
- **x²**: Square
- **x³**: Cube
- **x^y**: Power (use the number pad to enter the exponent)
- **log**: Logarithm base 10
- **ln**: Natural logarithm
- **e^x**: Exponential function
- **n!**: Factorial (non-negative integers only)
- **1/x**: Reciprocal
- **π**: Insert Pi constant
- **e**: Insert Euler's number

**Memory Functions:**
- **MC**: Memory Clear - Clear stored memory
- **MR**: Memory Recall - Recall stored value
- **MS**: Memory Store - Store current value
- **M+**: Memory Add - Add current value to memory
- **M-**: Memory Subtract - Subtract current value from memory

## Technical Details

### Tech Stack

- **React 19**: Modern UI library with hooks
- **Vite 7**: Next-generation frontend tooling
- **CSS3**: Custom styling with flexbox and grid

### Project Structure

```
scientific-calculator-app/
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

- **useState**: Manages calculator state (operands, operation, mode, memory, angle mode)
- **useEffect**: Handles keyboard event listeners
- **Component-based**: Modular and maintainable code structure
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors
- **Angle Conversion**: Automatic conversion between degrees and radians

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
