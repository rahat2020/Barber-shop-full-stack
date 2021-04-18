import React from 'react';
import'./AdminSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faGripHorizontal, faUserShield, faTasks} from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const AdminSidebar = () => {
    return (
        <div>
             <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled ">
                <li>
                    <Link to="/addServices" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>AddServices</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserShield} /> <span>AddAdmin</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/manage" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faTasks} /> <span>Mange inventory</span>
                    </Link>
                </li>
               
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
        </div>
    );
};

export default AdminSidebar;