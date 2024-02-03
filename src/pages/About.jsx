import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { about, skills, experiences, education } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      {/* intro */}
      <div className='flex relative lg:flex-row flex-col'>
        <div className='flex flex-1 flex-col min-w-[60%]'>
          <h1 className="head-text">
            Hello I'm <span className="blue-gradient_text font-semibold drop-schadow">{about.name}</span>
          </h1>
          <div>
            <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
              {about.info}
            </p>
          </div>
        </div>
        <div className='lg:w-[38%] w-full lg:h-auto md:h-[550px] h-[330px] lg:ml-32 mt-1.5'>
          <div className="block-container w-72 h-72 relative overflow-hidden">
            <div
              className={`absolute inset-0 rounded-xl ${about.theme} opacity-0 group-hover:opacity-75 transition-opacity`}
            />

            {/* Image container */}
            <div className="btn-front rounded-xl flex justify-center items-center overflow-hidden">
              <img
                src={about.imageUrl}
                alt="project-icon"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>

      {/* skills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-24 h-20 " key={`${skill.university}-${index}`}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl justify-center items-center flex flex-col ">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                <p className='text-sm'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* education */}
      <div>
        <h3 className="subhead-text"> Education</h3>
      </div>
      <div className="flex flex-wrap my-4 gap-16">
        {education.map((education, index) => (
          <div className=" w-full flex flex-row gap-12 mt-4" key={`${education.university}-${index}`}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${education.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={education.iconUrl} alt="project-icon" className="w-3/4 h-3/4 object-contain" />
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {education.name}
              </h4>
              <p className='text-blue-500'> {education.date}</p>
              <div className='flex flex-row items-center gap-8'>
                <p className="mt-1 text-slate-500">
                  {education.university} - <span className='font-poppins font-semibold'>{education.gpa}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* experience */}
      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
          Throughout my professional journey, I have collaborated with various companies, consistently elevating my skills while engaging with talented individuals. Here's a snapshot of my recent years:
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
                  <img src={experience.icon} alt={experience.company_name} className="w-[80%] h-[80%] object-contain" />
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
                textAlign:'justify'
              }}
            >
              <div>
                <h3 className='text-black-500 text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-500 text-md font-base' style={{ margin: 0 }}>
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
      <hr className='border-slate-300 mt-4' />
      <CTA />

    </section>
  )
}

export default About