import { useState, useEffect } from 'react'
import './Calculator.css'

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(null)

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
      default:
        return
    }

    computation = Math.round(computation * 1000000000) / 1000000000
    setCurrentOperand(computation.toString())
    setOperation(null)
    setPreviousOperand('')
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
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">
          {previousOperand && `${formatNumber(previousOperand)} ${getDisplayedOperation(operation)}`}
        </div>
        <div className="current-operand">{formatNumber(currentOperand)}</div>
      </div>
      <div className="buttons">
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
  )
}

export default Calculator
