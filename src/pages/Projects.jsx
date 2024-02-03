import {Link} from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-schadow">Projects</span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
        Over the years, my journey has been adorned with diverse projects, each adding a unique brushstroke 
        to my professional canvas. Among these endeavors, there are certain projects that hold an exceptional 
        place in my heart—ones that not only showcase my skills but also embody my passion and commitment.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={project.iconUrl} alt="project-icon" className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 text-justify">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500">
                  Link
                </Link>
                <img src={arrow} alt="arrow"  className="w-4 h-4 object-contain"/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  )
}

export default Projects