import {useEffect, useState} from 'react'
import divider from './images/pattern-divider-desktop.svg'
import diceIcon from './images/icon-dice.svg'
import './App.css';

/** 
 * 1. Setup default text in markup sections
 * 2. Add a conditional that shows the default false and the incoming data from the API when true
 * 3. Style the advice app
*/

function App() {
  const [advice, setAdvice] = useState({slip: {id: "", advice: ""}})
  
  // Make API fetch request
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data))
  }, [])

  return (
    <div className="container">
      <div className="advice-box">
        <h1>{advice.slip.id && `ADVICE #${advice.slip.id}`}</h1>
        <p>"{advice.slip.advice && advice.slip.advice}"</p>
        <img className="divider" src={divider} alt="Pattern Divider" />
        <div className="dice-container">
          <img className="dice-icon" src={diceIcon} alt="Dice Icon"/>
        </div>
      </div>
    </div>
  );
}

export default App;
