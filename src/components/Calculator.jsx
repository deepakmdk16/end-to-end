import { useState, useEffect } from 'react'
import './Calculator.css'

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(null)
  const [shouldResetScreen, setShouldResetScreen] = useState(false)

  const clear = () => {
    setCurrentOperand('0')
    setPreviousOperand('')
    setOperation(null)
    setShouldResetScreen(false)
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
    if (shouldResetScreen) {
      setCurrentOperand('0')
      setShouldResetScreen(false)
    }

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

  const roundResult = (number) => {
    return Math.round(number * 100000000) / 100000000
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
          alert('Cannot divide by zero!')
          clear()
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

    setCurrentOperand(roundResult(computation).toString())
    setOperation(null)
    setPreviousOperand('')
    setShouldResetScreen(true)
  }

  const getDisplayNumber = (number) => {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay

    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  const getPreviousOperandDisplay = () => {
    if (operation != null) {
      const operatorSymbols = {
        '+': '+',
        '-': '−',
        '*': '×',
        '/': '÷',
        '%': '%'
      }
      return `${getDisplayNumber(previousOperand)} ${operatorSymbols[operation]}`
    }
    return ''
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key)
      }
      if (e.key === '.') {
        appendNumber(e.key)
      }
      if (e.key === '=' || e.key === 'Enter') {
        compute()
      }
      if (e.key === 'Backspace') {
        deleteDigit()
      }
      if (e.key === 'Escape') {
        clear()
      }
      if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
        chooseOperation(e.key)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentOperand, previousOperand, operation])

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">{getPreviousOperandDisplay()}</div>
        <div className="current-operand">{getDisplayNumber(currentOperand)}</div>
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
