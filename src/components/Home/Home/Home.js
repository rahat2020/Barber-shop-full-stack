import React from 'react';
import Header from '../Header/Header';
import HairServices from '../HairServices/HairServices';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import Fotter from '../../Shared/Fotter/Fotter';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <HairServices></HairServices>
            <Features></Features>
            <Testimonial></Testimonial>
            <Fotter></Fotter>
            {/* <div>
                {
                     style.map(service => <HairServices key={service._id} service={service}> </HairServices>) 
                }
            </div> */}
        </div>
    );
};

export default Home;