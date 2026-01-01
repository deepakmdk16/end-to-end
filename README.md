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
- **React-Powered**: Built with React for optimal performance and maintainability

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Docker Deployment

Build and run using Docker:
```bash
docker build -t calculator-app .
docker run -p 8080:8080 -e PORT=8080 calculator-app
```

The app will be available at `http://localhost:8080`

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

- **React 18**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with gradients and animations

### Project Structure

```
├── src/
│   ├── components/
│   │   ├── Calculator.jsx      # Main calculator component
│   │   └── Calculator.css      # Calculator styles
│   ├── App.jsx                 # Root component
│   ├── App.css                 # App styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── Dockerfile                  # Docker container configuration
└── package.json                # Project dependencies
```

### Architecture

The calculator is built using React with modern best practices:

- **React Hooks**: useState and useEffect for state management
- **Component-Based**: Modular, reusable components
- **Event Handling**: Keyboard and mouse input support
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

### Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Design

The calculator features:
- Purple gradient background
- Clean white calculator interface
- Color-coded buttons for different operations
- Real-time display of current and previous operands
- Smooth hover and click animations

## License

Open source and free to use.
