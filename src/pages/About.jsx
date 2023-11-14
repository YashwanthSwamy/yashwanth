import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { skills, experiences } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      {/* intro */}
      <h1 className="head-text">
        Hello I'm <span className="blue-gradient_text font-semibold drop-schadow">Yashwanth Swamy</span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          A Full Stack Developer with 4+ years of experience in developing web applications.
        </p>
      </div>

      {/* skills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 ">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experience */}
      <div className="py-16">
      <h3 className="subhead-text">Experience</h3>
      <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I've worked with a range of companies, leveling up my skills and teaming up with smart people. Here's a run down of my last few years:
      </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
            key={`experience-${index}`}
            date={experience.date}
            icon={
              <div className='flex justify-center items-center h-full w-full'>
                <img src={experience.icon} alt={experience.company_name}  className="w-[80%] h-[80%] object-contain"/>
              </div>
            }
            iconStyle={{
              background: experience.iconBg,
            }}
            contentStyle={{
              border: '4px',
              borderStyle: 'solid',
              borderBottomColor: experience.iconBg,
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
              boxShadow: 'none',
            }}
            >
              <div>
                <h3 className='text-black-500 text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-500 text-md font-base' style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className='text-black-500/60 font-normal pl-1 text-sm'>
                    {point}
                  </li>
                ))}

              </ul>
            </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
      </div>

      {/* contact */}
      <hr className='border-slate-300 mt-4'/>
      <CTA/>

    </section>
  )
}

export default About