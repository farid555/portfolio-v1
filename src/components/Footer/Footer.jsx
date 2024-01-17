import { BsTwitterX } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-[13px] md:hidden flex flex-row-reverse mb-3 items-center justify-end text-[#d2dbee] gap-[20px]">
          <p className="hover:text-primary tracking-normal hover:-translate-y-2 ease-in-out duration-300 text-prime">
            farid555a@gmail.com
          </p>
          <div className="h-[1px] w-[150px] bg-[#d2dbee]"></div>
        </div>
        <div className="text-[20px] flex md:hidden mb-[50px] gap-[40px] items-center justify-end text-[#d2dbee]">
          <div className="tooltip tooltip-right" data-tip="Github">
            <a target="blank" href="https://github.com/farid555">
              <FiGithub className="hover:text-primary hover:-translate-y-1 ease-in-out duration-300" />
            </a>
          </div>
          <div className="tooltip tooltip-right" data-tip="Linked In">
            <a
              target="blank"
              href="https://www.linkedin.com/in/mohammad-uzzaman-b4a0421b8/"
            >
              <FiLinkedin className="hover:text-primary hover:-translate-y-1 ease-in-out duration-300" />
            </a>
          </div>
        
          <div className="tooltip tooltip-right" data-tip="Twitter">
            <a target="blank" href="https://twitter.com/">
              <BsTwitterX className="hover:text-primary hover:-translate-y-1 ease-in-out duration-300" />
            </a>
          </div>
          <div className="h-[1px] w-[150px] bg-[#d2dbee]"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-center mb-[30px]">
          <p className="text-[#d2dbee] text-[13px] text-prime text-center">
            © All Rights Reserved to Farid Zaman
          </p>
        </div>
      </div>
    );
};

export default Footer;