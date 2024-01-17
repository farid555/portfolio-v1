const Banner = () => {
  return (
    <div className="h-[100vh] px-[40px] flex flex-col items-start justify-center lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto">
      <h3 className="text-primary text-prime  text-[17px]">Hi, my name is</h3>
      <h1 className="text-[3rem] md:text-[4.5rem] text-[#ccd6f6] font-[700] leading-none mt-4 mb-5 md:mt-5 md:mb-6">
        Mohamm Uzzaman
      </h1>
      <h1 className="text-[3rem] md:text-[4.5rem] text-[#8892b0] font-[700] leading-none">
        Transforming processes using automation and web skills.
      </h1>

      <p className="text-[#8892b0] mt-[20px] md:mt-[30px] mb-[50px]">
        Thank you for taking the time to visit my website. The idea of
        discussing and demonstrating how my background and skills make me a top
        candidate for the Software Expert position excites me.
      </p>
      <a
        className="button"
        href="https://drive.google.com/file/d/1vy_VyZWWXyVhE-_uK4TdokDgBOghx9FJ/view?usp=drive_link"
        target="blank"
      >
        See Resume
      </a>
    </div>
  );
};

export default Banner;
