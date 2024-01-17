import { useEffect, useState } from "react";
import Title from "../../ui/Title";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="experience" className="flex flex-col ">
      <div className="lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto">
        <div className="md:w-[80%] pt-[60px] md:pt-[0px] ml-[40px] md:ml-0">
          <Title number={"03"} title={"Experience"}></Title>
        </div>
        <div className="pt-[20px]">
          {projects.map((project, index) => (
            <SingleProject
              key={index}
              project={project}
              index={index}
            ></SingleProject>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
