import { useState, useCallback, useEffect } from 'react';

export const useCalculator = () => {
  const [currentOperand, setCurrentOperand] = useState('0');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState(undefined);
  const [shouldResetScreen, setShouldResetScreen] = useState(false);

  const clear = useCallback(() => {
    setCurrentOperand('0');
    setPreviousOperand('');
    setOperation(undefined);
    setShouldResetScreen(false);
  }, []);

  const deleteDigit = useCallback(() => {
    if (currentOperand === '0') return;
    if (currentOperand.length === 1) {
      setCurrentOperand('0');
    } else {
      setCurrentOperand(currentOperand.slice(0, -1));
    }
  }, [currentOperand]);

  const appendNumber = useCallback((number) => {
    if (shouldResetScreen) {
      setCurrentOperand(number === '.' ? '0.' : number);
      setShouldResetScreen(false);
      return;
    }

    if (number === '.' && currentOperand.includes('.')) return;

    setCurrentOperand(prev => {
      if (prev === '0' && number !== '.') {
        return number;
      }
      return prev + number;
    });
  }, [currentOperand, shouldResetScreen]);

  const roundResult = (number) => {
    return Math.round(number * 100000000) / 100000000;
  };

  const compute = useCallback(() => {
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
      default:
        return;
    }

    setCurrentOperand(roundResult(computation).toString());
    setOperation(undefined);
    setPreviousOperand('');
    setShouldResetScreen(true);
  }, [previousOperand, currentOperand, operation, clear]);

  const chooseOperation = useCallback((op) => {
    if (currentOperand === '') return;

    if (previousOperand !== '') {
      compute();
    }

    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand('0');
  }, [currentOperand, previousOperand, compute]);

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
    const operatorSymbols = {
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷',
      '%': '%'
    };
    return operatorSymbols[op] || op;
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
      }
      if (e.key === '.') {
        appendNumber(e.key);
      }
      if (e.key === '=' || e.key === 'Enter') {
        compute();
      }
      if (e.key === 'Backspace') {
        deleteDigit();
      }
      if (e.key === 'Escape') {
        clear();
      }
      if (['+', '-', '*', '/', '%'].includes(e.key)) {
        chooseOperation(e.key);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [appendNumber, compute, deleteDigit, clear, chooseOperation]);

  return {
    currentOperand,
    previousOperand,
    operation,
    clear,
    deleteDigit,
    appendNumber,
    chooseOperation,
    compute,
    getDisplayNumber,
    getOperatorSymbol
  };
};
