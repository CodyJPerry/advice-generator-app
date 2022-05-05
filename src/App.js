import {useEffect, useState} from 'react'
import divider from './images/pattern-divider-desktop.svg'
import diceIcon from './images/icon-dice.svg'
import './App.css';

function App() {
  const [advice, setAdvice] = useState({slip: {id: "", advice: ""}})
  
  // Set the state upon load
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data))
  }, [])

  // Get a new piece of advice upon each button click
  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data))
  }

  return (
    <div className="container">
      <div className="advice-box">
        <h1>{advice.slip.id && `ADVICE #${advice.slip.id}`}</h1>
        <p>&#8220;{advice.slip.advice && advice.slip.advice}&#8221;</p>
        <img className="divider" src={divider} alt="Pattern Divider" />
        <div 
          className="dice-container"
          onClick={handleClick}>
          <img className="dice-icon" src={diceIcon} alt="Dice Icon"/>
        </div>
      </div>
    </div>
  );
}

export default App;
