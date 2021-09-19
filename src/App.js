import { useState } from 'react'

import Input from './components/Input/Input'
import Operator from './components/Operator/Operator'
import Result from './components/Result/Result'
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState({})
  const [inputCheckbox, setInputCheckbox] = useState({})
  const [result, setResult] = useState(0)
  const [error, setError] = useState({})

  const operators = ['+', '-', '*', '/']
  const inputs = ['input1', 'input2', 'input3']

  const handleText = (e) => {
    const re = /^[0-9\b]+$/
    if (re.test(e.target.value)) {
      setInputText({ ...inputText, [e.target.name]: e.target.value })
    } else {
      return alert('Please enter the number')
    }
  }

  const handleCheckbox = (e) => {
    setInputCheckbox({ ...inputCheckbox, [e.target.name]: e.target.checked })
  }

  const handleOperator = (operator) => {
    const asArrayObject = Object.entries(inputCheckbox)
    const numberOfChecked = asArrayObject.filter(([key, val]) => {
      return val === true
    })

    if (numberOfChecked.length <= 1) {
      return alert('Maximum of 2 inputs')
    }

    let values = []
    numberOfChecked.map(([key, value]) => {
      values.push(parseInt(inputText[key] || 0))
    })

    let tmpResult
    switch (operator) {
      case '+':
        tmpResult = values.reduce((previousValue, currentValue) => previousValue + currentValue)
        break
      case '-':
        tmpResult = values.reduce((previousValue, currentValue) => previousValue - currentValue)
        break
      case '*':
        tmpResult = values.reduce((previousValue, currentValue) => previousValue * currentValue)
        break
      case '/':
        tmpResult = values.reduce((previousValue, currentValue) => previousValue / currentValue)
        break
    }

    setResult(tmpResult)
  }

  return (
    <main className="App">
      <section className="App-inputs">
        {inputs.map((val, i) => (
          <Input
            nameText={val}
            nameCheckbox={val}
            valueText={inputText[val] || ''}
            valueCheckbox={inputCheckbox[val] || false}
            onTextChange={handleText}
            onCheckboxChange={handleCheckbox}
            key={i}
          />
        ))}
      </section>
      <section className="App-operators">
        {operators.map((val, i) => (
          <Operator operator={val} onClick={handleOperator} key={i} />
        ))}
      </section>
      <hr />
      <Result value={result} />
    </main>
  )
}

export default App
