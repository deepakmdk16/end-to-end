import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('0');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState(null);
  const [shouldResetScreen, setShouldResetScreen] = useState(false);

  const clear = () => {
    setCurrentOperand('0');
    setPreviousOperand('');
    setOperation(null);
    setShouldResetScreen(false);
  };

  const deleteDigit = () => {
    if (currentOperand === '0') return;
    if (currentOperand.length === 1) {
      setCurrentOperand('0');
    } else {
      setCurrentOperand(currentOperand.slice(0, -1));
    }
  };

  const appendNumber = (number) => {
    if (shouldResetScreen) {
      setCurrentOperand('0');
      setShouldResetScreen(false);
    }

    if (number === '.' && currentOperand.includes('.')) return;

    if (currentOperand === '0' && number !== '.') {
      setCurrentOperand(number);
    } else {
      setCurrentOperand(currentOperand + number);
    }
  };

  const chooseOperation = (op) => {
    if (currentOperand === '') return;

    if (previousOperand !== '') {
      compute();
    }

    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand('0');
  };

  const applyUnaryOperation = (op) => {
    const current = parseFloat(currentOperand);

    if (isNaN(current)) return;

    let result;
    switch (op) {
      case 'log':
        if (current <= 0) {
          alert('Logarithm undefined for non-positive numbers!');
          clear();
          return;
        }
        result = Math.log10(current);
        break;
      case 'ln':
        if (current <= 0) {
          alert('Natural logarithm undefined for non-positive numbers!');
          clear();
          return;
        }
        result = Math.log(current);
        break;
      case 'sqrt':
        if (current < 0) {
          alert('Square root undefined for negative numbers!');
          clear();
          return;
        }
        result = Math.sqrt(current);
        break;
      case 'square':
        result = current * current;
        break;
      default:
        return;
    }

    setCurrentOperand(roundResult(result).toString());
    setShouldResetScreen(true);
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        if (current === 0) {
          alert('Cannot divide by zero!');
          clear();
          return;
        }
        computation = prev / current;
        break;
      case '%':
        computation = prev % current;
        break;
      case '^':
        computation = Math.pow(prev, current);
        break;
      default:
        return;
    }

    setCurrentOperand(roundResult(computation).toString());
    setOperation(null);
    setPreviousOperand('');
    setShouldResetScreen(true);
  };

  const roundResult = (number) => {
    return Math.round(number * 100000000) / 100000000;
  };

  const getDisplayNumber = (number) => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  const getOperatorSymbol = (op) => {
    const symbols = {
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷',
      '%': '%',
      '^': '^'
    };
    return symbols[op] || op;
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">
          {operation && `${getDisplayNumber(previousOperand)} ${getOperatorSymbol(operation)}`}
        </div>
        <div className="current-operand">
          {getDisplayNumber(currentOperand)}
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-clear" onClick={clear}>AC</button>
        <button className="btn btn-delete" onClick={deleteDigit}>DEL</button>
        <button className="btn btn-function" onClick={() => applyUnaryOperation('sqrt')}>√</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('/')}>÷</button>

        <button className="btn btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn btn-number" onClick={() => appendNumber('8')}>8</button>
        <button className="btn btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('*')}>×</button>

        <button className="btn btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn btn-number" onClick={() => appendNumber('5')}>5</button>
        <button className="btn btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('-')}>−</button>

        <button className="btn btn-number" onClick={() => appendNumber('1')}>1</button>
        <button className="btn btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('+')}>+</button>

        <button className="btn btn-function" onClick={() => applyUnaryOperation('log')}>log</button>
        <button className="btn btn-number" onClick={() => appendNumber('0')}>0</button>
        <button className="btn btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn btn-equals" onClick={compute}>=</button>

        <button className="btn btn-function" onClick={() => applyUnaryOperation('ln')}>ln</button>
        <button className="btn btn-function" onClick={() => applyUnaryOperation('square')}>x²</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('^')}>x^y</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('%')}>%</button>
      </div>
    </div>
  );
}

export default Calculator;
