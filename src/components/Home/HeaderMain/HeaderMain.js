import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {

    return (
        <section id="banner">
            {/* <img src="logo.png" alt="" class="logo"> */}
                <div class="bannerText">
                    <h1>Hair studio</h1>
                    <p>Style your hair style your life</p>

                    <div class="bannerBtn">

                        <a href="#"><span ></span>Read more</a>
                        <a href="#"><span ></span>Find out</a>

                    </div>


                </div>
        </section>
    );
};

export default HeaderMain;