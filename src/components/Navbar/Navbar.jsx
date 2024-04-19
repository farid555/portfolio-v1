import { SlMenu } from "react-icons/sl";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";

const PDF_FILE_URL = "http://localhost:5173/Mohammad-Farid-Uzzaman.pdf";

const Navbar = () => {
  const download = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const navItems = (
    <div className="text-[#d2dbee] text-[14px] flex items-center gap-9">
      <li className="cursor-pointer">
        <Link
          to="about"
          className="text-prime tracking-normal hover:text-[#61fad5]"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <span className="text-[#61fad5] text-prime">01.</span> About
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          to="skills"
          className="text-prime tracking-normal hover:text-[#61fad5]"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          <span className="text-[#61fad5] text-prime">02.</span> Skills
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          to="experiences"
          className="text-prime tracking-normal hover:text-[#61fad5]"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          <span className="text-[#61fad5] text-prime">03.</span> Experiences
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          to="achievements"
          className="text-prime tracking-normal hover:text-[#61fad5]"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-[#61fad5] text-prime">04.</span> Achievements
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          to="contact"
          className="text-prime tracking-normal hover:text-[#61fad5]"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className="text-[#61fad5] text-prime">05.</span> Contact
        </Link>
      </li>
     
    </div>
  );

  return (
    <div className="navbar shadow-xl bg-opacity-95 fixed flex justify-between md:py-[8px] px-[25px] z-50 bg-[#0a192f]">
      <div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
        </div>
        <div>
          <a className="text-primary text-xl italic text-prime md:ml-[0] ml-[-35px]">{`<Farid/>`}</a>
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="menu-horizontal px-1 flex-nowrap">{navItems}</ul>
      </div>
      <div className="md:hidden navbar-end flex justify-end">
        <div className="">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button">
              <SlMenu className="text-white text-[20px] mr-[18px]" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#112240] p-4 w-80 min-h-full  text-base-content">
              <Sidebar></Sidebar>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
