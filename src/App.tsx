import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("");

  const createDigits = () => {
    const digits = [];
    for (let i=1; i < 10; i++) {
      digits.push(
        <button 
          onClick={() => handleNumber(i.toString())} 
          key={i}>{i}
        </button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const clearLast = () => {
    if (calc === '') {
      return;
    } 
    
    const value = calc.slice(0,-1);
    setCalc(value)
    setResult(value)
  }

  const clearAll = () => {
    setCalc('')
    setResult('')
  }

  const handleOperator = (operator: '/' | '*' | '+' | '-') => {
    const ops = ['/', '*', '+', '-'];
    console.log(calc.slice(-2))
    // Return if 
    // calc is empty and is not '-'
    // the last two characters are operators 
    if ((calc === '' && operator !== '-') || (ops.includes(calc.charAt(calc.length-2)) && ops.includes(calc.slice(-1)))) return
    // allow if operator is '-', and the last value of calc is '/' or '*'
    
    else if (operator === '-' && ['*','/'].includes(calc.slice(-1))) 
      setCalc(calc + operator)
    
      // if the last value of calc was an operator, change the last operator the latest.
    else if (ops.includes(calc.slice(-1))) 
      setCalc(calc.slice(0,-1) + operator)

    else setCalc(calc + operator);
  }

  const handleNumber = (number: string) => {
    if (calc === '0' && number === '0') return
    else if (calc === '0' && number !== '0') {
      setCalc(number);
      setResult(number);
    }
    else {
      setCalc(calc + number)
      setResult(eval(calc+number))
    }
  }
  

  const handleDecimalPoint = () => {
    if (calc.includes('.')) return
    else {
      setCalc(calc + '.')
      setResult(calc + '.')
    }
  }

  return ( 
    <div className="App">
        <div className="calculator">
          <div className="display">
              {result ? <span>{result}</span> : ''}
              &nbsp;
              {calc || "0"}
          </div>

          <div className="operators">
              <button onClick= {() => handleOperator('/')}>/</button>
              <button onClick= {() => handleOperator('*')}>*</button>
              <button onClick= {() => handleOperator('+')}>+</button>
              <button onClick= {() => handleOperator('-')}>-</button>
  
              <button onClick={clearLast}>DEL</button>
              <button onClick={clearAll}>C</button>
          </div>

          <div className="digits">
              { createDigits() }
              <button onClick= {() => handleNumber('0')}>0</button>
              <button onClick= {() => handleDecimalPoint()}>.</button>
              <button onClick= { calculate }>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
