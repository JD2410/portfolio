import HCaptcha from '@hcaptcha/react-hcaptcha';
import validator from 'validator'
import './contactform.css'
import { useState } from "react";

const Form = () => {
    const [result, setResult] = useState({
        label: "Send",
        stage: null
    });
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
            newObj.errorMessage = "Please enter a valid email address"
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
            newObj.errorMessage = "Please enter a longer message"
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
                errorMessage: "Please confirm you're human"
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

        if(formInvalid) {
            return false;
        }
        const formData = new FormData();
        formData.append("access_key", "3a0883f7-cd78-4779-85f9-1b8d217f12d3");
        formData.append("message", message.value);
        formData.append("email", email.value);
        formData.append("h-captcha-response", hcap.token);

        setResult({
            label: 'Loading',
            stage: 'loading'
        });

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult({
                label: 'Form Submitted Successfully',
                stage: 'success'
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult({
                label: 'Form unable to send. Please try again',
                stage: 'error'
            });
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
            <div className={hcap.errorMessage != null ? "error" : ""}>
                <div className='HCaptcha-container'>
                    <HCaptcha
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={onHCaptchaChange} 
                    />
                </div>
                
                <p>{hcap.errorMessage}</p>
            </div>
            <button type="submit" 
                className={`border bg-blue-500 text-white pt-2 pb-2 rounded-md ${result.stage != null ? result.stage : ''}`}
            >{result.label}</button>
        </form>
    )
}

export default Form;