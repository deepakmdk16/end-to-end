import { useCalculator } from '../hooks/useCalculator';
import './Calculator.css';

const Calculator = () => {
  const {
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
  } = useCalculator();

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">
          {operation != null
            ? `${getDisplayNumber(previousOperand)} ${getOperatorSymbol(operation)}`
            : ''}
        </div>
        <div className="current-operand">
          {getDisplayNumber(currentOperand)}
        </div>
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
  );
};

export default Calculator;
