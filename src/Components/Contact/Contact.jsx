import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "734a2cdd-39e8-44fb-9af1-6d8ac99b9a08");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert(result);
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id="contact"className='contact'>
        <div className="contact-title">
            <h1><span>Get in touch</span></h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel free to send me a message anything that you want me to work on.You can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail"/><p>shilpashree4103@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location"/><p>SJCE Mysuru,Karnataka</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call"/><p>+917483434901</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name='email'/>
                <label htmlFor="">Your message here</label>
                <textarea name="message" rows="3" placeholder='Enter your message'></textarea>
                <button type="submit" className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
