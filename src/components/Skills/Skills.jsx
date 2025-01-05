import { IoMdArrowDropright } from "react-icons/io";
import Title from "../../ui/Title";
import { useState, useEffect } from "react";

const Skills = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("logo.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  const skills = [
    "AWS",
    "Linux Administration",
    "Shell Scripting",
    "Python",
    "Jenkins",
    "Docker Container",
    "Docker compose",
    "Kubernetes(K8S)",
    "Git",
    "Github Actions",
    "Terraform",
    "Javascript",
    "React",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section
      id="skills"
      className="flex flex-col lg:flex-row items-center gap-[50px] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto my-10"
    >
      <div className="space-y-4 lg:w-[100%] text-[#8892b0]">
        <Title number={"02"} title={"Skills"}></Title>
        <div className="flex flex-col md:flex-row gap-10 md:gap-4 items-center justify-center">
          <div className="space-y-3  lg:w-[50%] ml-15 text-[#8892b0] shrink-0 gap-4">
            <ul className="grid grid-cols-2 gap-[10px] text-[15px]">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-1">
                  <IoMdArrowDropright className="text-[#61fad5]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 place-items-center gap-2">
            {images.map((image, ind) => (
              <div
                key={ind}
                className="shadow-xl w-[100px] h-[75px] bg-[#263750] bg-cover rounded-xl"
              >
                <img
                  className="h-[80px] bg-contain mx-auto my-auto py-[10px] px-[px]"
                  src={image.url}
                  /* alt={image.name}*/
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
