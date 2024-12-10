import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import './resumeBodyLeft.css'
import profilePicture from '../../../../imgs/profilePicture.jpg'


const ResumeBodyLeft = () => {
  return (
    <div className="resumeBody__left"> 
      <div className='resumeBody__left__profilePicture'>
        <img src={profilePicture} />
      </div>

      <div className='resumeBody__left__bio'>
        <div className='resumeBody__left__bio__phone'>
          <BsFillTelephoneFill/>
          <span>+98-935-532-8506</span>
        </div>
        <div className='resumeBody__left__bio__email'>
          <MdEmail/>
          <span>saba.fekri@gmail.com</span>
        </div>
        <div className='resumeBody__left__bio__address'>
          <MdLocationOn/>
          <span>Iran, Ardabil, khalkhal</span>
        </div>
        <div className='resumeBody__left__bio__link'>
          <AiFillLinkedin/>
          <span><a href='https://www.linkedin.com/in/saba-fekri-9abb41215/'>linkedIn/sbafekri</a></span>
        </div>
      </div>

      <div className='resumeBody__left__education'>
        <span className='resumeBody__left__education__title'>EDUCATION</span>
        <div className='resumeBody__left__education__discription'>
          <span className='resumeBody__left__education__discription__fieldName'>Bachelor's of Russian</span>
          <span className='resumeBody__left__education__discription__uniName'>Shahid Beheshti University</span>
          <span className='resumeBody__left__education__discription__date'>2012 - 2016</span>
        </div>
      </div>

      <div className='resumeBody__left__expertise'>
        <span className='resumeBody__left__expertise__title'>EXPERTISE</span>
        <div className='resumeBody__left__expertise__discription'>
          <span className='resumeBody__left__expertise__discription__item'>Copywriting</span>
          <span className='resumeBody__left__expertise__discription__item'>Creative Writing</span>
          <span className='resumeBody__left__expertise__discription__item'>Content Creation & Strategy</span>
          <span className='resumeBody__left__expertise__discription__item'>Editing & Proofreading</span>
          <span className='resumeBody__left__expertise__discription__item'>WordPress</span>
          <span className='resumeBody__left__expertise__discription__item'>Translating</span>
        </div>
      </div>

      <div className='resumeBody__left__languages'>
        <span className='resumeBody__left__languages__title'>LANGUAGES</span>
        <div className='resumeBody__left__languages__discription'>
          <span className='resumeBody__left__languages__discription__item'>English</span>
          <span className='resumeBody__left__languages__discription__item'>Russian</span>
          <span className='resumeBody__left__languages__discription__item'>Persian</span>
        </div>
      </div>
    </div>
  )
}

export default ResumeBodyLeft