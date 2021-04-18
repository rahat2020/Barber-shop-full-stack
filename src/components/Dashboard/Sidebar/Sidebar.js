import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserShield, faTasks } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false)
    useEffect(() => {
        fetch('https://sleepy-fortress-88910.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
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


                    </div>
                }


            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;