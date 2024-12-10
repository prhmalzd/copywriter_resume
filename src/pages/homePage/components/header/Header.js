import { useEffect, useState } from 'react'
import './header.css'

const Header = () => {
  const [text, setText] = useState('')
  const texts = ['H', 'He', 'Hel', 'Hell', 'Hello', 'Hello!', '' , 'H', 'He', 'Hey','Hey!','', 'H','Hi', 'Hi!']
  const [textNumber, setTextNumber] = useState(0)
  
    let timeoutID;
    function delay() {
      timeoutID = setInterval(showText, 700);
    }
    function showText() {
      if (textNumber < texts.length) {
        setText(texts[textNumber])
        const newTextNumber = textNumber + 1
        setTextNumber(newTextNumber)

      }
    }
    delay()

    setTimeout(clearDelay,1000)
    function clearDelay() {
      clearInterval(timeoutID)
    }



  return (
    <div className="header">
      <span className='header__text'>{text}</span>
    </div>
  )
}

export default Header