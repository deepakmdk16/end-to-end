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
- **React Hooks**: Built with modern React patterns using useState and useEffect

## Development

### Prerequisites

- Node.js 20.0.0 or higher
- npm

### Installation

```bash
npm install
```

### Running Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
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

## Technical Details

### Tech Stack

- **React**: UI library
- **Vite**: Build tool and development server
- **CSS3**: Styling with modern features

### Project Structure

```
calculator-react-app/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx
│   │   └── Calculator.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── Dockerfile
```

### Architecture

The calculator is built using React with functional components and hooks:

- **Calculator Component**: Main component managing calculator state with React hooks
- **useState**: Manages current operand, previous operand, operation, and screen reset state
- **useEffect**: Handles keyboard event listeners
- **Event Handlers**: Handle user input from buttons and keyboard
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

## Docker Deployment

### Building the Docker Image

```bash
docker build -t calculator-react-app .
```

### Running the Docker Container

```bash
docker run -p 8080:8080 calculator-react-app
```

The app will be available at `http://localhost:8080`

### Deployment Notes

The Dockerfile uses a multi-stage build:
1. **Build Stage**: Installs all dependencies and builds the React app
2. **Production Stage**: Serves the built static files using `serve`

The application listens on the `PORT` environment variable (default: 8080), making it compatible with cloud deployment platforms like Google Cloud Run.

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## UI Features

The calculator features:
- Purple gradient background
- Clean white calculator interface
- Color-coded buttons for different operations
- Real-time display of current and previous operands
- Smooth hover and click animations
- Fully responsive design for mobile and desktop

## License

Open source and free to use.
