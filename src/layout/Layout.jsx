import Home from "../Home/Home";
import Navbar from "../components/Navbar/Navbar";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const Layout = () => {
    const componentDidMount = () => {
        // Remove default favicon
        const linkElements = document.querySelectorAll("link[rel*='icon']");
        linkElements.forEach(link => link.remove());
    }
    componentDidMount();
    return (
        <div className="bg-primary">
            <Navbar></Navbar>
            <div className="flex justify-between ">
                <div className="fixed bottom-0 w-[40px] hidden md:flex justify-center mx-[40px]">
                    <div className="text-[20px] flex flex-col gap-[40px] items-center justify-end text-[#d2dbee]">
                        <div className="tooltip tooltip-right" data-tip="Github">
                            <a target="blank" href="https://github.com/farid555">
                                <FiGithub className="hover:text-[#61fad5] hover:-translate-y-1 ease-in-out duration-300" />
                            </a>
                        </div>
                        <div className="tooltip tooltip-right" data-tip="Linked In">
                            <a target="blank" href="https://www.linkedin.com/in/mohammad-uzzaman-b4a0421b8/">
                                <FiLinkedin className="hover:text-[#61fad5] hover:-translate-y-1 ease-in-out duration-300" />
                            </a>
                        </div>
                        <div className="tooltip tooltip-right" data-tip="Twitter">
                            <a target="blank" href="https://twitter.com/mohammad-uzzaman">
                                <BsTwitterX className="hover:text-[#61fad5] hover:-translate-y-1 ease-in-out duration-300" />
                            </a>
                        </div>
                        <div className="w-[1px] h-[150px] bg-[#d2dbee]"></div>
                    </div>
                </div>

                <div className="md:px-[120px]">
                    <Home></Home>
                </div>

                <div className="fixed bottom-0 h-[390px] right-0 w-[40px] hidden md:flex justify-center mx-[40px]">
                    <div className="text-[13px] flex flex-col gap-[120px] items-center justify-end text-[#d2dbee] overflow-hidden">
                        <p className="hover:text-[#61fad5] rotate-90 tracking-normal hover:-translate-y-2 ease-in-out duration-300 text-prime">farid555a@gmail.com</p>
                        <div className="w-[1px] h-[150px] bg-[#d2dbee]"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Layout;