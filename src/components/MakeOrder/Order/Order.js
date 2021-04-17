import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [order, setOrder] = useState([])
    console.log(order);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/ordered?email' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <table className="table border" style={{width: '80%'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Description</th>
                        <th>images</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((itemOrder, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{itemOrder.product?.name}</td>
                                <td>{itemOrder.product?.description}</td>
                                <td className="imgStyle"><img style={{height:'100px', width:'200px'}} src={itemOrder.product?.imgURL}/></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Order;