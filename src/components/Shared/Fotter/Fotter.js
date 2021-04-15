import React from 'react';
import './Fotter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return (
        <section className="fotter mt-5 p-5 bg-light">
            <div className="titleText">
                <p>CONTACT WITH US</p>
                <h1> Visit the shop now</h1>
            </div>
            <div className="fotter-row">
                <div class="fotter-left">
                    <h1>Opening Hours</h1>
                    <p><FontAwesomeIcon className="text-info icon" icon={faClock} ></FontAwesomeIcon> Monday to Friday - 9am to 9pm</p>

                    <p><FontAwesomeIcon className="text-info icon" icon={faClock} ></FontAwesomeIcon> Saturday to sunday - 8am to 11pm</p>
                </div>
                <div class="fotter-right">
                    <h1>Get in touch </h1>
                    <p>#1212 Gulshan evenue, Gulshan <FontAwesomeIcon className="text-info icon" icon={faMapMarker}  ></FontAwesomeIcon> </p>
                    <p>barbershop@gmail.com <FontAwesomeIcon className="text-info icon" icon={faEnvelope}  ></FontAwesomeIcon> </p>
                    <p>+880186913040 <FontAwesomeIcon className="text-info icon" icon={faPhone}  ></FontAwesomeIcon></p>
                    <p>+880186913040 <FontAwesomeIcon className="text-info icon" icon={faPhone}  ></FontAwesomeIcon></p>
                </div>
            </div>
            <div class="social">
            <FontAwesomeIcon className="text-info icon" icon={faFacebook}  ></FontAwesomeIcon>
            <FontAwesomeIcon className="text-info icon" icon={faYoutube}  ></FontAwesomeIcon>
            <FontAwesomeIcon className="text-info icon" icon={faTwitter}  ></FontAwesomeIcon>
            <FontAwesomeIcon className="text-info icon" icon={faInstagram}  ></FontAwesomeIcon>
        </div>
        </section>
    );
};

export default Contact;