import { useState, useEffect } from 'react'
import './Calculator.css'

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(null)
  const [isScientific, setIsScientific] = useState(false)
  const [memory, setMemory] = useState(0)
  const [angleMode, setAngleMode] = useState('deg') // 'deg' or 'rad'

  const clear = () => {
    setCurrentOperand('0')
    setPreviousOperand('')
    setOperation(null)
  }

  const deleteDigit = () => {
    if (currentOperand === '0') return
    if (currentOperand.length === 1) {
      setCurrentOperand('0')
    } else {
      setCurrentOperand(currentOperand.slice(0, -1))
    }
  }

  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return
    if (currentOperand === '0' && number !== '.') {
      setCurrentOperand(number)
    } else {
      setCurrentOperand(currentOperand + number)
    }
  }

  const chooseOperation = (op) => {
    if (currentOperand === '') return
    if (previousOperand !== '') {
      compute()
    }
    setOperation(op)
    setPreviousOperand(currentOperand)
    setCurrentOperand('0')
  }

  const compute = () => {
    let computation
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if (isNaN(prev) || isNaN(current)) return

    switch (operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        if (current === 0) {
          alert('Cannot divide by zero')
          return
        }
        computation = prev / current
        break
      case '%':
        computation = prev % current
        break
      case '^':
        computation = Math.pow(prev, current)
        break
      default:
        return
    }

    computation = Math.round(computation * 1000000000) / 1000000000
    setCurrentOperand(computation.toString())
    setOperation(null)
    setPreviousOperand('')
  }

  // Scientific functions
  const toRadians = (degrees) => degrees * (Math.PI / 180)
  const toDegrees = (radians) => radians * (180 / Math.PI)

  const applyScientificFunction = (func) => {
    const current = parseFloat(currentOperand)
    if (isNaN(current)) return

    let result
    switch (func) {
      case 'sin':
        result = angleMode === 'deg' ? Math.sin(toRadians(current)) : Math.sin(current)
        break
      case 'cos':
        result = angleMode === 'deg' ? Math.cos(toRadians(current)) : Math.cos(current)
        break
      case 'tan':
        result = angleMode === 'deg' ? Math.tan(toRadians(current)) : Math.tan(current)
        break
      case 'asin':
        result = angleMode === 'deg' ? toDegrees(Math.asin(current)) : Math.asin(current)
        break
      case 'acos':
        result = angleMode === 'deg' ? toDegrees(Math.acos(current)) : Math.acos(current)
        break
      case 'atan':
        result = angleMode === 'deg' ? toDegrees(Math.atan(current)) : Math.atan(current)
        break
      case 'sqrt':
        result = Math.sqrt(current)
        break
      case 'square':
        result = current * current
        break
      case 'cube':
        result = current * current * current
        break
      case 'log':
        result = Math.log10(current)
        break
      case 'ln':
        result = Math.log(current)
        break
      case 'exp':
        result = Math.exp(current)
        break
      case '1/x':
        if (current === 0) {
          alert('Cannot divide by zero')
          return
        }
        result = 1 / current
        break
      case 'abs':
        result = Math.abs(current)
        break
      case 'factorial':
        if (current < 0 || !Number.isInteger(current)) {
          alert('Factorial only works with non-negative integers')
          return
        }
        result = factorial(current)
        break
      case 'pi':
        result = Math.PI
        break
      case 'e':
        result = Math.E
        break
      case 'negate':
        result = -current
        break
      default:
        return
    }

    result = Math.round(result * 1000000000) / 1000000000
    setCurrentOperand(result.toString())
  }

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  // Memory functions
  const memoryClear = () => setMemory(0)
  const memoryRecall = () => setCurrentOperand(memory.toString())
  const memoryAdd = () => {
    const current = parseFloat(currentOperand)
    if (!isNaN(current)) {
      setMemory(memory + current)
    }
  }
  const memorySubtract = () => {
    const current = parseFloat(currentOperand)
    if (!isNaN(current)) {
      setMemory(memory - current)
    }
  }
  const memoryStore = () => {
    const current = parseFloat(currentOperand)
    if (!isNaN(current)) {
      setMemory(current)
    }
  }

  const formatNumber = (number) => {
    if (number === '' || number === '0') return '0'
    const parts = number.split('.')
    const integerPart = parseInt(parts[0]).toLocaleString('en-US')
    if (parts.length > 1) {
      return `${integerPart}.${parts[1]}`
    }
    return integerPart
  }

  const getDisplayedOperation = (op) => {
    switch (op) {
      case '*':
        return '×'
      case '/':
        return '÷'
      case '-':
        return '−'
      case '^':
        return '^'
      default:
        return op
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key)
      } else if (e.key === '.') {
        appendNumber('.')
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
        chooseOperation(e.key)
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault()
        compute()
      } else if (e.key === 'Backspace') {
        e.preventDefault()
        deleteDigit()
      } else if (e.key === 'Escape') {
        clear()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <div className="calculator-container">
      <div className={`calculator ${isScientific ? 'scientific' : 'basic'}`}>
        <div className="mode-toggle">
          <button
            className={`mode-btn ${!isScientific ? 'active' : ''}`}
            onClick={() => setIsScientific(false)}
          >
            Basic
          </button>
          <button
            className={`mode-btn ${isScientific ? 'active' : ''}`}
            onClick={() => setIsScientific(true)}
          >
            Scientific
          </button>
        </div>

        <div className="display">
          <div className="previous-operand">
            {previousOperand && `${formatNumber(previousOperand)} ${getDisplayedOperation(operation)}`}
          </div>
          <div className="current-operand">{formatNumber(currentOperand)}</div>
          {memory !== 0 && <div className="memory-indicator">M</div>}
        </div>

        {isScientific && (
          <div className="scientific-controls">
            <button className="angle-mode-btn" onClick={() => setAngleMode(angleMode === 'deg' ? 'rad' : 'deg')}>
              {angleMode.toUpperCase()}
            </button>
            <div className="memory-buttons">
              <button className="btn btn-memory" onClick={memoryClear}>MC</button>
              <button className="btn btn-memory" onClick={memoryRecall}>MR</button>
              <button className="btn btn-memory" onClick={memoryStore}>MS</button>
              <button className="btn btn-memory" onClick={memoryAdd}>M+</button>
              <button className="btn btn-memory" onClick={memorySubtract}>M-</button>
            </div>
          </div>
        )}

        <div className="buttons-container">
          {isScientific && (
            <div className="scientific-buttons">
              <button className="btn btn-function" onClick={() => applyScientificFunction('sin')}>sin</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('cos')}>cos</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('tan')}>tan</button>
              <button className="btn btn-function" onClick={() => chooseOperation('^')}>x^y</button>

              <button className="btn btn-function" onClick={() => applyScientificFunction('asin')}>asin</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('acos')}>acos</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('atan')}>atan</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('sqrt')}>√x</button>

              <button className="btn btn-function" onClick={() => applyScientificFunction('log')}>log</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('ln')}>ln</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('exp')}>e^x</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('square')}>x²</button>

              <button className="btn btn-function" onClick={() => applyScientificFunction('pi')}>π</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('e')}>e</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('factorial')}>n!</button>
              <button className="btn btn-function" onClick={() => applyScientificFunction('1/x')}>1/x</button>
            </div>
          )}

          <div className="basic-buttons">
            <button className="btn btn-clear" onClick={clear}>AC</button>
            <button className="btn btn-delete" onClick={deleteDigit}>DEL</button>
            <button className="btn btn-operator" onClick={() => chooseOperation('%')}>%</button>
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

            <button className="btn btn-number btn-zero" onClick={() => appendNumber('0')}>0</button>
            <button className="btn btn-number" onClick={() => appendNumber('.')}>.</button>
            <button className="btn btn-equals" onClick={compute}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
