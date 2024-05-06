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
            {"I've"} been a resident in Helsinki since 2021. {"I'm"} a driven
            DevOps engineer who has high standards for quickly picking up new
            abilities. I obtained a software development diploma in addition to
            my {"bachelor's"} degree in business management.
          </p>
          <p>
            {" "}
            I am appreciative of my experience working in a variety of demanding
            settings. I am looking for DevOps Engineering and AWS Cloud Engineering positions. I Excel collaborative team settings and as an independent contributor, possessing a strong drive for innovation, problem-solving, and experience in automation and troubleshooting. I now have excellent communication abilities. My extensive
            expertise allows me to adapt to any setting and contribute
            significantly to teams in the future.
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
