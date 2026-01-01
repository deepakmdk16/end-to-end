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
- **React Hooks**: Built with modern React patterns using custom hooks

## Usage

### Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

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
- **Custom Hooks**: For calculator logic and state management

### Architecture

- **useCalculator Hook**: Custom hook that manages calculator state and operations
- **Calculator Component**: Main component that renders the UI
- **Event Handlers**: Handle user input from buttons and keyboard
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

### Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Docker Deployment

The application can be deployed using Docker. A production-ready Dockerfile is included at the root of the repository.

Build and run with Docker:
```bash
docker build -t calculator-app .
docker run -p 8080:8080 -e PORT=8080 calculator-app
```

## License

Open source and free to use.
