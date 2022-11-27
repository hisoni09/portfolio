import React from 'react';
import emailjs from 'emailjs-com';
import Typewriter from "typewriter-effect";
import './ContactMe.css';

export default function ContactMe() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_cmlo72r', 'template_sajw6zb', e.target, '6L5AgJn0uSveL6gsv')
        .then((result) => {
        }, (error) => {
        });
        e.target.reset()
    }
  
    return(
        <div id="contact">
            <div className="contactheader">
            <Typewriter
                options={{
                    strings: ['Get in touch_'],
                    autoStart: true,
                    delay: 100,
                    loop: true,
                }}
                />
            </div>
            <div className="contact row">
                <div className="cdetails column">
                    <div className="contact_details">
                        <div className="phone">
                            <h4>PHONE: </h4>&nbsp;&nbsp;&nbsp; &nbsp;
                            <a href="tel:+13417326710">+13417326710</a>
                        </div>
                        <div className="email">
                        <h4>EMAIL: </h4>&nbsp;&nbsp;&nbsp; &nbsp;
                            <a href="mailto:himanshu.soni@colostate.edu">himanshu.soni@colostate.edu</a>
                        </div>
                    </div>
                    <div className="socials">
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/hisoni09/" target="_blank">LinkedIn</a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/hisoni09" target="_blank">GitHub</a>
                        </div>
                    </div>   
                </div>
                <div className="cform column">
                    <form onSubmit={sendEmail}>
                            <div className="contactform">
                                <div className="form-group mx-auto fields">
                                    <input type="text" className="form-control" placeholder="Your Name" name="from_name"/>
                                </div>
                                <div className="form-group pt-2 mx-auto fields">
                                    <input type="email" className="form-control" placeholder="Your Email" name="user_email"/>
                                </div>
                                <div className="form-group pt-2 mx-auto fields">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                                </div>
                                <div className="form-group pt-2 mx-auto fields">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="mx-auto btnfield">
                                    <input type="submit" className="btn btn-info contactbtn" value="Send"></input>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }

