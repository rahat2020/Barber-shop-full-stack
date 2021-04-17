import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddServices from '../AddServices/AddServices';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
    
        const containerStyle = {
            backgroundColor: "#F4FDFB",
            height: "100%"
        }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <Navbar></Navbar>
                <div className="col-md-3">
                    <AdminSidebar/>
                </div>
                <div className="col-md-9">
                        <AddServices/>
                </div>
            </div>
        </section>
    );
};

export default Admin;