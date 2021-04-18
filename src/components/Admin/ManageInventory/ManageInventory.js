import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageInventory = () => {
    const [deleteItems, setDeleteItems] = useState([])
    // const [admin, setAdmin] = useState([])
    const { _id } = useParams();
    // console.log(_id)
    useEffect(() => {
        const url = `https://sleepy-fortress-88910.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setDeleteItems(data)


            )

    }, [])

    const handleDeleteItems = (id) => {

        fetch(`https://sleepy-fortress-88910.herokuapp.com/deleteItems/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    alert('delted successfully');
                    console.log(res)
                }
            })

        console.log('button is clcked')
    }
    return (
        <div>
             <Navbar></Navbar>
            <AdminSidebar></AdminSidebar>
            <h2 className="text-primary text-center"> Delete items</h2>
            <table className="border p-3 mt-3 text-center" style={{ width: "60%", margin: 'auto'}}>
                <thead style={{ margin: 'auto', textAlign: 'center' }}>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Description</th>
                        <th>images</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deleteItems.map((itemDelete, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{itemDelete.name}</td>
                                <td>{itemDelete.description}</td>
                                <td ><img style={{ width: '90px' }} src={itemDelete.imgURL} alt="" /></td>
                                <td><button style={{ width: '90px', }} onClick={() => handleDeleteItems(itemDelete._id)} className="btn btn-primary">Delete </button></td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;