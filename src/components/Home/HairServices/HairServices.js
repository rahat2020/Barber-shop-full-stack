import React from 'react';
import imageOne from '../../../img/imgeOne.jpg'
import imageTwo from '../../../img/imageTwo.jpg'
import imageThree from '../../../img/imageThree.jpg';
import imageFour from '../../../img/imageFour.jpg';
import './HairServices.css';

const HairServices = () => {
    return (
        <section id="services">
            <div className="titleText mt-5">
                <p>OUR SERVICES</p> 
                <h1>  We provide better services</h1>

            </div>
            <div className="serviceBox ">
                <div className="single_serviceBox">
                    <img src={imageOne} alt=""/>
                
                <div className="overlay"></div>
                <div className="serviceDex">
                    <h3>Hair stylings</h3>
                    <hr/>
                    <p>this is under description of barber salon</p>
                </div>
                </div>

                    {/* image number two */}
                <div className="single_serviceBox">
                    <img src={imageTwo} alt=""/>
                
                <div className="overlay"></div>
                <div className="serviceDex">
                    <h3>Bear trim</h3>
                    <hr/>
                    <p>this is under description of barber salon</p>
                </div>
                </div>

                    {/* image number three */}
                <div className="single_serviceBox">
                    <img src={imageThree} alt=""/>
                
                <div className="overlay"></div>
                <div className="serviceDex">
                    <h3>Hair cutting</h3>
                    <hr/>
                    <p>this is under description of barber salon</p>
                </div>
                </div>

                    {/* image numer four */}
                <div className="single_serviceBox">
                    <img src={imageFour} alt=""/>
                
                <div className="overlay"></div>
                <div className="serviceDex">
                    <h3>Dry hair wash</h3>
                    <hr/>
                    <p>this is under description of barber salon</p>
                </div>
                </div>

            </div>
            
        </section>
    );
};

export default HairServices;