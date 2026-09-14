import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="align-element">
        <SectionTitle text="Featured Projects" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
