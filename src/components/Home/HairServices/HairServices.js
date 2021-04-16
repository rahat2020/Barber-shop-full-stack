import React, { useEffect, useState } from 'react';
// import imageOne from '../../../img/imgeOne.jpg'
// import imageTwo from '../../../img/imageTwo.jpg'
// import imageThree from '../../../img/imageThree.jpg';
// import imageFour from '../../../img/imageFour.jpg';
// import './HairServices.css';
// import { useParams } from 'react-router';

const HairServices = () => {
    const [style, setStyle] = useState([])
    console.log(style)

    useEffect(() => {
        const url = `http://localhost:5000/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStyle(data))
    }, [])

    return (
        <section id="services">
            <div className="titleText mt-5">
                <p>OUR SERVICES</p>
                <h1>  We provide better services</h1>

            </div>

            <div className="serviceBox ">
                {
                    style.map((service) => ( 
                        <div className="single_serviceBox">
                            <img src="" alt="" />

                            <div className="overlay"></div>
                            <div className="serviceDex">
                                {/* <h3>Hair stylings </h3> */}
                                <h3>{service.services?.name} </h3>
                                <hr />
                                {/* <p>this is under description of barber salon</p> */}
                                <p></p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default HairServices;