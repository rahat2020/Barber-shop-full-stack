import React from 'react';
import './Testimonial.css';
import userone from '../../../img/userone.jpg';
import usertwo from '../../../img/usertwo.jpg';
import userthree from '../../../img/userthree.jpg';


const Testimonial = () => {
    return (
        <div className="mt-5">
            <section id="testimonial " >
                <div className="titleText">
                    <p>TESTMONIAL</p>
                    <h1> What client says</h1>
                </div>
                <div className="testimonial-row ">
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={userone} alt=""></img>
                            <div className="userInfo">
                                <h4> Rahat</h4>
                                <small>california</small>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ea,
                    praesentium.</p>
                    </div>
                    {/* second user */}
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={usertwo} alt=""></img>
                            <div className="userInfo">
                                <h4> Rahat</h4>
                                <small>california</small>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ea,
                    praesentium.</p>
                    </div>
                    {/* user three */}
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={userthree} alt=""></img>
                            <div className="userInfo">
                                <h4> Rahat</h4>
                                <small>california</small>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ea,
                    praesentium.</p>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Testimonial;