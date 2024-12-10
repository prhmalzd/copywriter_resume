import './resumePage.css'
import Navbar from "../commonComponents/navbar/Navbar"
import ResumeBody from './components/ResumeBody'
import ResumeHeader from './components/ResumeHeader'

const ResumePage = ({goToWoelcomePage}) => {
  const goToResumePage = () => {
    console.log('resume Page')
  }
  return (
    <div className="resumePage">
      <Navbar logoName={'My Resume'} backgroundColor={'#EFCFC3'} goToWoelcomePage={goToWoelcomePage} goToResumePage={goToResumePage}/>
      <ResumeBody/>
      <ResumeHeader/>
    </div>
  )
}

export default ResumePage