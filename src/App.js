import {useEffect, useState} from 'react'
import './App.css';

/**
  *  slip: {
  *     id: 75, 
  *     advice: 'You will always regret the round of Tequila.'
  *  }
  * 
 */

function App() {
  // Need state to store the required objects information
  const [advice, setAdvice] = useState({slip: {id: "", advice: ""}})
  
  // Make API fetch request
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data))
  }, [])

  return (
    <div className="App container">
      <div className="advice-box">
        {advice.slip.id && <h1>ADVICE #{advice.slip.id}</h1>}
        {/* <h1>ADVICE #</h1> */}
        <p>{}</p>
        <div>{/* Placeholder Icon */}</div>
        <div>{/* Placeholder Dice Image */}</div>
      </div>
    </div>
  );
}

export default App;
