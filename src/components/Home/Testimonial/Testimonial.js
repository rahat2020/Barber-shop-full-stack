import React, { useEffect, useState } from 'react';
import './Testimonial.css';



const Testimonial = () => {
    const [review, setReview] = useState([])
    console.log(review)

    useEffect(() => {
        const url = `https://sleepy-fortress-88910.herokuapp.com/reviews`
        fetch(url)
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="mt-5">
            <section id="testimonial " >
                <div className="titleText">
                    <p>TESTMONIAL</p>
                    <h1> What client says</h1>
                </div>
                <div className="testimonial-row ">
                    {
                        review.map((userReview) => (
                            <div className="testimonial-col">
                                <div className="user">
                                    <img src={userReview.imgURL} alt=""></img>
                                    <div className="userInfo">
                                        <h4> {userReview.name}</h4>
                                        <small>{userReview.region}</small>
                                    </div>
                                </div>
                                <p className="paraStyle">" {userReview.Description} "</p>
                            </div>
                        ))
                    }


                </div>

            </section>
        </div>
    );
};

export default Testimonial;