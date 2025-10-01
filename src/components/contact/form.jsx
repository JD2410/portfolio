import HCaptcha from '@hcaptcha/react-hcaptcha';
import validator from 'validator'
import './contactform.css'
import { useState } from "react";

const Form = () => {
    const [result, setResult] = useState("");
    const [hcap, setHcap] = useState({
        token: null,
        errorMessage: null
    });
    const [email, setEmail] = useState({
        value: "",
        touched: false,
        errorMessage: null
    })
    const [message, setMessage] = useState({
        value: "",
        touched: false,
        errorMessage: null
    })

    const onHCaptchaChange = (tokenValue) => {
        setHcap({
            ...hcap,
            token: tokenValue
        });
    };

    const emailTouched = () => {
        setEmail({
            ...email,
            touched: true
        })
    }
    const checkEmail = (e) => {
        let newObj = {
            ...email,
            value: e
        }
        if(!validator.isEmail(e)) {
            newObj.errorMessage = "Not Valid Email"
        } else {
            newObj.errorMessage = null
        }
        setEmail(newObj)
    }
    const checkMessage = (e) => {
        let newObj = {
            ...message,
            value: e
        }
        if (e.length <= 2) {
            newObj.errorMessage = "Message must be more than 2 characters"
        } else {
            newObj.errorMessage = null
        }
        setMessage(newObj)
    }
    const messageTouched = () => {
        setMessage({
            ...message,
            touched: true
        })
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        let formInvalid = false;

        if (hcap.token == null) { 
            setHcap({
                ...hcap,
                errorMessage: "Please confirm you're human 🤣"
            })
            formInvalid = true
        } else {
            setHcap({
                ...hcap,
                errorMessage: null
            })
        }
        if (email.value.trim() == "") { 
            setEmail({
                ...email,
                errorMessage: "Please add a contact detail",
                touched: true
            })
            formInvalid = true
        }
        if (message.value.trim() == "") { 
            setMessage({
                ...message,
                errorMessage: "Please add some details as to why you want to get in touch",
                touched: true
            })
            formInvalid = true
        }
        alert(formInvalid)
        if(formInvalid) {
            return false;
        }
        const formData = new FormData();
        formData.append("access_key", "3a0883f7-cd78-4779-85f9-1b8d217f12d3");
        formData.append("message", message.value);
        formData.append("email", email.value);
        formData.append("h-captcha-response", hcap.token);

        setResult("Sending....");

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
        <form onSubmit={submitHandler} className="flex flex-col gap-3 contact-form">
            <h3 className="text-2xl font-bold mb-1 text-left">Drop me a line</h3>
            <p className="leading-[1.8rem] text-gray-700 mb-3">Fill out the form below and I'll get back to you asap!</p>
            <div className={email.errorMessage != null && email.touched ? "error" : ""}>
                <input 
                    type="text" 
                    name="email"
                    className="border-2 pt-2 pb-2 pl-3 pr-3 mb-4 w-[100%] rounded-md"
                    placeholder="Email Address"
                    value={email.value}
                    onChange={(e) => checkEmail(e.target.value)}
                    onBlur={emailTouched}
                />
                {email.errorMessage != null && email.touched ? (
                    <p>{email.errorMessage}</p>
                ) : ""}
            </div>
            <div className={message.errorMessage != null && message.touched ? "error" : ""}>
                <textarea 
                    name="message" 
                    className="border-2 h-[250px] pt-3 pb-4 pl-4 pr-2 mb-3 rounded-sm w-[100%]" 
                    placeholder="Message"
                    value={message.value}
                    onChange={(e) => checkMessage(e.target.value)}
                    onBlur={messageTouched}
                ></textarea>
                {message.errorMessage != null && message.touched ? (
                    <p>{message.errorMessage}</p>
                ) : ""}
            </div>
            <div>
                <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange} 
                />
                {hcap.errorMessage}
            </div>
            <span>{result}</span>
            <button type="submit" className="border bg-blue-500 text-white pt-2 pb-2 rounded-md">Send</button>
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            <span class="sr-only">Loading...</span>
        </form>
    )
}

export default Form;