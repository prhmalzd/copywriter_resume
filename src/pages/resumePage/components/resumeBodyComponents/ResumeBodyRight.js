import './resumeBodyRight.css'

const ResumeBodyRight = () => {
  return (
    <div className="resumeBody__right">

      <div className="resumeBody__right__header">
        <span className='resumeBody__right__header__name'>SABA FEKRI</span>
        <span className='resumeBody__right__header__discription'>Content Writer</span>
      </div>

      <div className='resumeBody__right__aboutMe'>
        <span className='resumeBody__right__aboutMe__header'>ABOUT ME</span>
        <span className='resumeBody__right__aboutMe__bio'>I am an accomplished content writer with 5+ years of experience creating high-performing, SEO-optimized content for blogs, websites, and social media. Known for my ability to adapt to various brand voices and produce content that drives engagement, I specialize in turning complex topics into accessible, compelling narratives. I thrive in deadline-driven environments and enjoy collaborating with teams to achieve content goals.</span>
      </div>

      <div className='resumeBody__right__WorkExperience'>
        <span className='resumeBody__right__WorkExperience__header'>WORK EXPERIENCE</span>

        <div className='resumeBody__right__WorkExperience__works'>

          <div className='resumeBody__right__WorkExperience__work'>
            <span className='resumeBody__right__WorkExperience__field'>Content Writer</span>
            <span className='resumeBody__right__WorkExperience__date'>November 2023 - November 2024</span>
            <span className='resumeBody__right__WorkExperience__coName'> at <a href='https://ostado.uk/'>Ostado</a> </span>
            <ul>
              <li>Created SEO-optimized blog posts that ranked on Google’s Featured Snippets, increasing visibility and driving organic traffic.</li>
              <li>Conducted in-depth research on the UK education system to support online tutors in creating effective and tailored lesson plans for students.
              </li>
              <li>Collaborated with team members to write an eBook designed to help students effectively prepare for their GCSEs, one of England's most important exams</li>
              <li>Wrote website copy to highlight the platform's purpose, value, and processes, driving engagement with tutors and students.
              </li>
              <li>Researched the UK education system, exams, and lesson plans to support teammates in creating accurate and high-quality content.
              </li>
            </ul>
          </div>

          <div className='resumeBody__right__WorkExperience__work'>
            <span className='resumeBody__right__WorkExperience__field'>Content Writer</span>
            <span className='resumeBody__right__WorkExperience__date'>September 2020 - September 2023</span>
            <span className='resumeBody__right__WorkExperience__coName'>at <a href='https://livingmaples.com/'>LivingMaples</a></span>
            <ul>
              <li>Wrote SEO-optimized blog posts tailored for seniors in Canada, providing actionable tips to promote healthier and more active lifestyles.
</li>
              <li>Researched Alzheimer's disease and collaborated with doctors to gather insights for developing games and apps aimed at delaying disease progression.
              </li>
              <li>Crafted YouTube video captions for a video app designed to promote healthier minds and bodies among seniors.
</li>
              <li>Conducted research on seniors' preferences and needs to inform and improve the product design process.
              </li>
              <li>Authored user interface (UI) text for apps, ensuring clear, user-friendly language to enhance the overall user experience.

              </li>
            </ul>
          </div>

        <span className='resumeBody__right__WorkExperience__works__circule1'></span>
        <span className='resumeBody__right__WorkExperience__works__circule2'></span>
        </div>
      </div>


    </div>
  )
}

export default ResumeBodyRight