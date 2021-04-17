import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
// import Fotter from '../../Shared/Fotter/Fotter';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
// import Checkout from '../Chcekout/Checkout';
import Order from '../Order/Order';

const MakeOrder = () => {
   


    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-3 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 mt-3 " >
                {/* <Checkout></Checkout> */}
                <Order></Order>
            </div>

        </div>
    );
};

export default MakeOrder;