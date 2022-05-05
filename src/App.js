import {useEffect, useState} from 'react'
import desktopDivider from './images/dividerDesktop.svg'
import mobileDivider from './images/dividerMobile.svg'
import diceIcon from './images/icon-dice.svg'
import './App.css';

function App() {
  const [advice, setAdvice] = useState({slip: {id: "", advice: ""}})
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // clean up our resize event
    return () => window.removeEventListener('resize', handleResize)

  })
  
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
        <div className="divider">
          <img src={windowSize > 600 ? desktopDivider : mobileDivider} alt="Image used as a divider" />
        </div>
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
