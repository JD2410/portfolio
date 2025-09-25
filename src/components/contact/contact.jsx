import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapPin } from "react-icons/fa";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const [hcap, setHcap] = useState("");

    const onHCaptchaChange = (token) => {
        setHcap(token);
    };
    const submitHandler = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "3a0883f7-cd78-4779-85f9-1b8d217f12d3");
        formData.append("h-captcha-response", hcap);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

    }
    return (
        <section className="flex flex-col items-center pl-4 sm:pl-0 pr-4 sm:pr-0" id="contactme">
            <h1 className="text-left w-[100%] sm:text-center text-2xl md:text-4xl font-bold mt-5 lg:mt-10 text-gray-900">Get in touch</h1>
            <hr className="hr-underline mt-2 mb-2 sm:mt-5 sm:mb-5 w-[100%] sm:max-w-[220px] rounded-sm" />
            <p className="sm:text-center mb-4 sm:mb-8 sm:pl-2 sm:pr-2 text-gray-700">Methods and ways to get in touch with me, please do and I promise to get back to you!</p>
            <div className="grid sm:grid-cols-2 max-w-6xl gap-4 mt-10">
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-left">Get in Touch</h3>
                    <p className="leading-[1.8rem] text-gray-700 mb-6">Reach out to me, I’m looking forward to hearing from you and working on some interesting projects</p>
                    <a href="mailto:jonathandelves@hotmail.com" className="flex gap-4 items-center mb-3"><FaEnvelope size={25} /> jonthandelves@hotmail.com</a>
                    <div className="flex gap-4 items-center"><FaMapPin size={25} />Essex, United Kingdom</div>
                    <h3 className="text-xl font-bold mb-1 text-left mt-4">The Socials</h3>
                    <div className="flex gap-4 pt-1">
                        <a href="https://www.linkedin.com/in/jonathan-richard-anderson-delves" target="_blank"><FaLinkedin size={30} /></a>
                        <a href="https://github.com/JD2410" target="_blank"><FaGithub size={30} /></a>
                    </div>
                </div>
                <form onSubmit={submitHandler} className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold mb-1 text-left">Drop me a line</h3>
                    <p className="leading-[1.8rem] text-gray-700 mb-3">Fill out the form below and I’ll get back to you asap!</p>
                    <input 
                        type="text" 
                        name="email"
                        className="border-1 pt-1 pb-1 pl-2 pr-2 mb-3 rounded-sm bg-white" 
                        placeholder="Email" />
                    <textarea 
                        name="message" 
                        className="border-1 h-[250px] pt-1 pb-1 pl-2 pr-2 rounded-sm bg-white" 
                        placeholder="Message"
                    ></textarea>
                    <HCaptcha
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={onHCaptchaChange} 
                    />
                    <button type="submit" className="border">Send</button>
                </form>
                <span>{result}</span>
            </div>
            
        </section>
    )
}

export default Contact