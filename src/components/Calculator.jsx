import React, { useState, useEffect } from 'react'
import './Calculator.css'

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operator, setOperator] = useState(null)
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

  const formatNumber = (number) => {
    if (!number) return '0'
    const [integer, decimal] = number.split('.')
    const formattedInteger = parseInt(integer).toLocaleString('en-US')
    return decimal !== undefined ? `${formattedInteger}.${decimal}` : formattedInteger
  }

  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return
    if (shouldResetDisplay) {
      setCurrentOperand(number)
      setShouldResetDisplay(false)
    } else {
      setCurrentOperand(currentOperand === '0' ? number : currentOperand + number)
    }
  }

  const chooseOperator = (op) => {
    if (currentOperand === '') return
    if (previousOperand !== '') {
      compute()
    }
    setOperator(op)
    setPreviousOperand(currentOperand)
    setShouldResetDisplay(true)
  }

  const compute = () => {
    let result
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if (isNaN(prev) || isNaN(current)) return

    switch (operator) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '*':
        result = prev * current
        break
      case '/':
        if (current === 0) {
          alert('Cannot divide by zero')
          clear()
          return
        }
        result = prev / current
        break
      case '%':
        result = prev % current
        break
      default:
        return
    }

    // Round to prevent floating-point errors
    result = Math.round(result * 100000000) / 100000000
    setCurrentOperand(result.toString())
    setOperator(null)
    setPreviousOperand('')
    setShouldResetDisplay(true)
  }

  const clear = () => {
    setCurrentOperand('0')
    setPreviousOperand('')
    setOperator(null)
    setShouldResetDisplay(false)
  }

  const deleteNumber = () => {
    if (currentOperand.length === 1) {
      setCurrentOperand('0')
    } else {
      setCurrentOperand(currentOperand.slice(0, -1))
    }
  }

  const handleKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key)
    if (e.key === '.') appendNumber(e.key)
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
      chooseOperator(e.key)
    }
    if (e.key === 'Enter' || e.key === '=') compute()
    if (e.key === 'Escape') clear()
    if (e.key === 'Backspace') deleteNumber()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentOperand, previousOperand, operator])

  const getDisplayOperation = () => {
    if (!operator) return ''
    const operatorSymbols = {
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷',
      '%': '%'
    }
    return `${formatNumber(previousOperand)} ${operatorSymbols[operator]}`
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">{getDisplayOperation()}</div>
        <div className="current-operand">{formatNumber(currentOperand)}</div>
      </div>
      <div className="buttons">
        <button className="btn btn-clear" onClick={clear}>AC</button>
        <button className="btn btn-delete" onClick={deleteNumber}>DEL</button>
        <button className="btn btn-operator" onClick={() => chooseOperator('%')}>%</button>
        <button className="btn btn-operator" onClick={() => chooseOperator('/')}>÷</button>

        <button className="btn btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn btn-number" onClick={() => appendNumber('8')}>8</button>
        <button className="btn btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn btn-operator" onClick={() => chooseOperator('*')}>×</button>

        <button className="btn btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn btn-number" onClick={() => appendNumber('5')}>5</button>
        <button className="btn btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn btn-operator" onClick={() => chooseOperator('-')}>−</button>

        <button className="btn btn-number" onClick={() => appendNumber('1')}>1</button>
        <button className="btn btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn btn-operator" onClick={() => chooseOperator('+')}>+</button>

        <button className="btn btn-number btn-zero" onClick={() => appendNumber('0')}>0</button>
        <button className="btn btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn btn-equals" onClick={compute}>=</button>
      </div>
    </div>
  )
}

export default Calculator
