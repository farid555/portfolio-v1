import Title from "../../ui/Title";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();
    const handleMessage = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                Swal.fire({
                    title: "Message has been sent successfully",
                    width: 600,
                    confirmButtonColor: "#61fad5",
                    padding: "3em",
                    color: "#61fad5",
                    background: "#0a192f url(meme-cat-cat-meme.gif)",
                    backdrop: `
                    rgba(169, 248, 235, 0.404)
                      url("cheering-cheerleader.gif")
                      left top
                      no-repeat
                    `
                });
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <section id="contact" className="mt-[150px] px-[40px] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto mb-[200px] ">
            <h3 className="text-primary text-prime pb-2">{`What's`} next?</h3>
            <Title
                number={'05'}
                title={'Contact Me'}
            ></Title>
            <form
                ref={form}
                onSubmit={handleMessage}
                className="space-y-5 text-[#d2dbee]">
                <div className="input-container">
                    <input type="text" name="user_name" className="input w-[100%] text-[#d2dbee]" placeholder="Your name" required />
                </div>
                <div className="input-container">
                    <input type="email" name="user_email" className="input w-[100%] text-[#d2dbee]" placeholder="Your email" required />
                </div>
                <div className="input-container">
                    <textarea className="input w-[100%] min-h-[150px] text-[#d2dbee]" type="area" name="message" placeholder="Your message" required />
                </div>
                <input type="submit" value={'SEND MESSAGE'} className="button w-full font-bold" />
            </form>
        </section>
    );
};

export default Contact;