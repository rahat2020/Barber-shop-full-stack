import React from 'react';
import './Features.css';
import barber from '../../../img/barber.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldVirus, faCheckSquare, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
const Features = () => {
    return (
        <section id="feature ">
            <div className="titleText">
                <p>FEATURES</p>
                <h1>Why chose us</h1>
            </div>

            <dib className="featuresBox mt">
                <div className="features">
                    <h1>Experienced staff</h1>
                    <div className="featureDex">
                        <div className="featureIcon">
                        <FontAwesomeIcon className="text-info icon" icon={faShieldVirus}  ></FontAwesomeIcon>

                        </div>
                        <div className="featureText">
                            <p>Here is our Experienced barber for your hair cut and
                            style services. Here With low cost of budget you may can select lots of items
                             where you will get much more services</p>
                        </div>
                    </div>
                    {/* check square */}
                    <h1> Pre booking online</h1>
                    <div className="featureDex">
                        <div className="featureIcon">
                        <FontAwesomeIcon className="text-info icon" icon={faCheckSquare}  ></FontAwesomeIcon>

                        </div>
                        <div className="featureText">
                            <p>Here is our Experienced barber for your hair cut and
                            style services. Here With low cost of budget you may can select lots of items
                             where you will get much more services</p>
                        </div>
                    </div>
                    {/* money  */}
                    <h1> Affordable cost</h1>
                    <div className="featureDex">
                        <div className="featureIcon">
                        <FontAwesomeIcon className="text-info icon" icon={faMoneyBillAlt}  ></FontAwesomeIcon>

                        </div>
                        <div className="featureText">
                            <p>Here is our Experienced barber for your hair cut and
                            style services. Here With low cost of budget you may can select lots of items
                             where you will get much more services</p>
                        </div>
                    </div>
                </div>
                    <div className="featuresImg">
                        <img src={barber} alt=""/>
                    </div>
            </dib>
        </section>
    );
};

export default Features;