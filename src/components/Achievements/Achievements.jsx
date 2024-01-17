import { useEffect, useState } from "react";
import Title from "../../ui/Title";
import { Link } from "react-router-dom";

const Achievements = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("achieve.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  console.log(datas);
  return (
    <div
      id="achievements"
      className="flex flex-col lg:flex-row items-center gap-[50px] h-[80vh] px-[40px] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto  mb-[550px]"
    >
      <div className="space-y-4 lg:w-[100%] ml-auto text-[#8892b0]">
        <Title number={"04"} title={"Achievements"}></Title>

        {/* <div className="space-y-3 lg:w-[50%] ml-15 text-[#8892b0]"></div> */}

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 justify-center">
          {datas.map((item, ind) => (
            <Link
              to={`${item.Link}`}
              target="_blank"
              className="bg-[#0A192F]  space-y-1 shadow-2xl rounded-xl p-12"
              key={ind}
            >
              <p className="font-[700] text-white">{item.institute}</p>
              <div className="">
                <p>{item.institute}</p>
                <p className="text-[#8892B0]">{item.year}</p>
                <p className="text-[#9AA0B2]">{item.program}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
