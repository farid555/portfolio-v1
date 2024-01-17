import { FaExternalLinkAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Modal } from 'react-responsive-modal';
import React from 'react';
import 'react-responsive-modal/styles.css';
import '../../../src/index.css'

const SingleProject = ({ project, index }) => {
    const [slider, setSlider] = useState(true);
    const [open, setOpen] = React.useState(false);

    const myRef = React.useRef(null);

    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: {
            origin: "center",
            // perView: 2,
            spacing: 0,
        },
        vertical: true,
    })

    let odd;
    if (index % 2 === 0) {
        odd = false;
    }
    else {
        odd = true;
    }
    const handlePreview = () => {
        setSlider(!slider)
    }

    const { name, description, technologies, live_link, video_url, details, img_urls } = project;
    // console.log(project?.video_url)

    return (
        <div className="mx-auto pb-[100px] md:pb-[250px] xl:pb-[200px]">
            <div className="md:relative px-[40px] mx-auto flex flex-col justify-center gap-[50px] md:mt-[200px] lg:mt-[250px]">

                <div className={`md:w-[50%] md:absolute z-10 ${odd ? 'right-0' : 'left-0'} flex flex-col ${odd ? 'md:items-end' : 'md:items-start'}`}>
                    <div className={`flex justify-between items-center md:gap-[120px] lg:gap-[180px] ${odd ? 'md:flex-row-reverse' : ''}`}>
                        <p className="text-primary text-[13px] text-prime">Featured Project</p>
                        {
                            slider ? <FaVideo
                                onClick={handlePreview}
                                className="text-primary text-[22px] cursor-pointer" />
                                : <FaImage
                                    onClick={handlePreview}
                                    className="text-primary text-[22px] cursor-pointer" />
                        }
                    </div>
                    <div className={`space-y-4 flex flex-col ${odd ? 'md:items-end' : 'md:items-start'}`}>
                        <p className="text-[28px] font-[600] text-[#ccd6f6]">{name}</p>
                        <div className="p-[20px] bg-[#112240] rounded-[4px] text-[#a8b2d1]">
                            <p>{description}</p>
                        </div>
                        <div className="flex gap-4 text-[13px] text-[#a8b2d1] flex-wrap">
                            {
                                technologies.map(tech => <p key={tech} className="font-[600] shrink-0 text-prime text-[14px]">{tech}</p>)
                            }
                        </div>
                        <div className="flex gap-8 text-[#ccd6f6]">
                            <Link to={`${live_link}`}><FaExternalLinkAlt className="hover:text-primary] text-[18px]  cursor-pointer" /></Link>
                            <BiDetail
                                onClick={() => setOpen(true)}
                                className="hover:text-primary text-[22px] cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className={`md:w-[60%]  md:absolute z-0 hover:z-20 my-auto ${odd ? 'left-0' : 'right-0'}`}>

                    <div ref={sliderRef} className="keen-slider h-[200px] md:h-[250px] lg:h-[350px] xl:h-[400px]" >
                        {
                            img_urls.map((img, index) => <div
                                key={index}
                                className="keen-slider__slide number-slide2">
                                <img className="h-[100%] w-[100%]" src={img} alt="" />
                            </div>)
                        }
                    </div>

                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        center
                        container={myRef.current}
                    >
                        <p>
                            Take a look with the devtools, you can see that the modal is inside
                            the div we are targeting and not at the end of the body tag.
                        </p>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;