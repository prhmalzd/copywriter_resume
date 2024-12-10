import './navbar.css'

const Navbar = ({logoName, discription, backgroundColor,goToWoelcomePage,goToResumePage}) => {
  const goToWoelcome = () => {
    goToWoelcomePage()
  }
  return (
    <div className="navbar" style={{backgroundColor: backgroundColor}}>
      <div className="nav__left">
        <span className="nav__left__logoName">{logoName}</span>
        <span className="nav__left__discription">{discription ? discription : ''}</span>
      </div>
      <div className="nav__right">
        <span className='nav__right__item' onClick={goToWoelcome}>Welcome</span>
        <span className='nav__right__item' onClick={goToResumePage}>Resume</span>
      </div>
    </div>
  )
}

export default Navbar