import {Link} from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({content, link, btnText}) => {
  return (
  <div className='info-box'>
    <p className='font-medium sm:text-m text-center'>{content}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} alt='arrow-right' className='w-4 h-4 object-contain'/>
    </Link>
  </div>
  )
};

const stageContent = {
    1: (
        <h1 className='sm:text-l sm:leading-snug text-center neo-brutalism-blue text-white mx-5 py-4 px-8'>
            Hi! 👋 
            I am <span className='font-semibold'>Yashwanth Swamy</span> 
            <br/>
            A Software Engineer who lives in United States
        </h1>
    ),
    2: (
        <InfoBox 
        content="Worked as a Senior Software engineer in Siemens and Software engineer Intern at Nasdaq"
        link='/about'
        btnText='Know More'
        />
    ),
    3: (
        <InfoBox 
        content="Led multiple projects and worked on various technologies. Curious about my projects?"
        link='/projects'
        btnText='See Projects'
        />
    ),
    4: (
        <InfoBox 
        content="Looking for a Developer? I'm just a click away."
        link='/contact'
        btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return stageContent[currentStage] || null;
}

export default HomeInfo