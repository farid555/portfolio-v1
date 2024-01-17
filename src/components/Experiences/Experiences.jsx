import { useEffect, useState } from "react";
import Title from "../../ui/Title";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  //console.log(experiences);
  return (
    <div
      id="experiences"
      className="flex flex-col lg:flex-row items-center gap-[50px] h-[80vh] px-[40px] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto my-80"
    >
      <div className="space-y-4 lg:w-[100%] ml-auto text-[#8892b0]">
        <Title number={"03"} title={"Experiences"}></Title>
        <div className="space-y-3 lg:w-[50%] ml-15 text-[#8892b0]"></div>
        {experiences.map((exp, ind) => (
          <div
            className="bg-[#0A192F] space-y-1 shadow-2xl p-[17px] rounded-xl"
            key={ind}
          >
            <p className="font-[700] text-white">{exp.companyName}</p>
            <div className="flex gap-2">
              <p className="text-[#8892B0]">{exp.location}</p>
              <p className="text-[#8892B0]">{" | "}</p>
              <p className="text-[#8892B0]">{exp.year}</p>
            </div>
            <p className="text-[#9AA0B2]">{exp.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
