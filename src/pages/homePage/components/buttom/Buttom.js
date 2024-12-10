import './buttom.css'

const Buttom = ({goToResumePage}) => {

  const goToResume = () => {
    goToResumePage()
  }
  return (
    <div className="buttombar">
      <div className='buttombar__left'>
      <span className='buttombar__left__name'>I'm Saba.</span>
      <span className='buttombar__left__welcome'>Nice to meet you!</span>
      </div>
      <div className='buttombar__right'>
        <span className='buttom__bar__right__resumebutton' onClick={goToResume}>CHECK OUT MY RESUME</span>
      </div>
    </div>
  )
}

export default Buttom