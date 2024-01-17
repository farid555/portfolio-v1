
const Title = ({ number, title, size, mdSize }) => {
    return (
        <div className="flex items-center gap-[40px] mb-[40px]">
            <div className="shrink-0">
                <p className={`${size ? size : 'text-[25px]'} ${mdSize? mdSize : 'md:text-[32px]'} text-primary text-prime`}>{number}. <span className="text-[#ccd6f6] font-[600] text-nowrap">{title}</span></p>
            </div>
            <div className="w-full h-[1px] bg-[#233554]"></div>
        </div>
    );
};

export default Title;