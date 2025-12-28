# Calculator App

A modern, responsive calculator web application with a beautiful user interface and full keyboard support.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Modulo Operation**: Calculate remainders
- **Decimal Support**: Perform calculations with decimal numbers
- **Keyboard Support**: Use your keyboard for faster input
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Prevents division by zero
- **Clean UI**: Modern gradient background with smooth animations

## Usage

### Opening the Calculator

Simply open `index.html` in any modern web browser.

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

### Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - Calculator logic and functionality

### Architecture

The calculator is built using vanilla JavaScript with an object-oriented approach:

- **Calculator Class**: Manages all calculator operations and state
- **Event Listeners**: Handle user input from buttons and keyboard
- **Display Management**: Formats numbers with thousands separators
- **Precision Handling**: Rounds results to prevent floating-point errors

### Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Screenshots

The calculator features:
- Purple gradient background
- Clean white calculator interface
- Color-coded buttons for different operations
- Real-time display of current and previous operands

## License

Open source and free to use.
