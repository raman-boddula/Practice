import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [prime, setPrime] = React.useState("ghjghj");
  const [sum, setSum] = React.useState('');
  const handlePrime = ({ sum }) => {
    console.log('got you',sum)
    if (sum <= 2) {
      setPrime("true")
      return;
    }
    else {
      for (let i = 2; i < sum; i++) {
        if (sum % i === 0) {
          setPrime("false");
          return;
         }
      }
      setPrime("true");
      return;
     }
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          name="value1"
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="text"
          name="value1"
          onChange={(e) => setValue2(e.target.value)}
        />
        <button onClick={() => setSum(Number(value1) + Number(value2))}>
          addTwo
        </button>
        <h1>{sum}</h1>
        <button onClick={() =>handlePrime({sum})}>Check Prime</button>
        <h1>is it prime : {prime}</h1>
      </header>
    </div>
  );
}

export default App;
