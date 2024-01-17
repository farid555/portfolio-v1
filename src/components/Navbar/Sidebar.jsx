import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="h-full my-auto text-[16px] text-[#d2dbee]">
            <div className="h-[282px] w-[288px] flex items-center justify-center flex-col gap-8">
                <Link
                    spy={true} smooth={true} offset={50} duration={500}
                    to='about'
                    className="tracking-normal text-center hover:text-primary">
                    <p className="text-primary mb-2">01.</p> About
                </Link>
                {/* <a className="tracking-normal text-center hover:text-[#61fad5]">
                <p className="text-[#61fad5] mb-2">02.</p> Experience
            </a> */}
                <Link
                    spy={true} smooth={true} offset={50} duration={500}
                    to='about'
                    className="tracking-normal text-center hover:text-primary">
                    <p className="text-primary mb-2">02.</p> Work
                </Link>
                <Link
                    spy={true} smooth={true} offset={50} duration={500}
                    to='about'
                    className="tracking-normal text-center hover:text-primary">
                    <p className="text-primary mb-2">03.</p> Contact
                </Link>
                <button className="button tracking-normal">Download Resume</button>
            </div>
        </div>
    );
};

export default Sidebar;