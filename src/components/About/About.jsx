import Title from "../../ui/Title";

const About = () => {
  return (
    <section
      id="about"
      className=" items-center gap-[50px] px-[40px] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto"
    >
      <Title number={"01"} title={"About Me"}></Title>
      <div className="flex items-center gap-4">
        <div className="space-y-4 lg:w-[50%] ml-auto text-[#8892b0]">
          <p>
          Hello! My name is Mohammad Farid Uzzaman, and I am an enthusiastic aspiring DevOps and Cloud Engineer currently seeking an internship opportunity to kickstart my career. I am passionate about leveraging automation, cloud technologies, and modern DevOps practices to build scalable, reliable, and efficient systems. With a foundational knowledge of tools and platforms like AWS, Docker, Kubernetes, and Jenkins, I am eager to apply my skills in real-world scenarios while learning from experienced professionals. I am particularly excited about the intersection of development and operations, where collaboration and innovation drive impactful results.

          </p>
        </div>
        <div className="w-[300px] mx-auto shrink-0 mr-auto  cursor-progress">
          <div className="container">
            <div className="card">
              <div className="filter filter-red">
                <img className="rounded-[4px]" src="farid.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
