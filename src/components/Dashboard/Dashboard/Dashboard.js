import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;