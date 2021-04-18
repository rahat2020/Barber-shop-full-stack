import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Navbar from '../../Shared/Navbar/Navbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddAdmin = () => {
    const location = useLocation
    const [service, setService] = useState({
        name: '',
        email: '',
        imgURL: '',
    })
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...service }
        newData[event.target.name] = event.target.value;
        setService(newData);

    }

    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', 'a47557afaf048f36baeddb3327dc918f');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...service }
                imgData.imgURL = response.data.data.display_url
                setService(imgData)
                // setImgURL(response.data.data.display_url);
                alert("image added to the database & imgbb");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddService = e => {
        e.preventDefault(true);
        if (service.imgURL !== '') {
            console.log(service)
            const url = `https://sleepy-fortress-88910.herokuapp.com/admin`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('Review added to database successfully')

        }

    };
    // adding current admin to the UI
    const [admin, setAdmin] = useState([])
    console.log(admin)
    useEffect(() => {
        const url = `https://sleepy-fortress-88910.herokuapp.com/showAdmin`
        fetch(url)
            .then(response => response.json())
            .then(data => setAdmin(data))
    }, [])
    return (
        <section>
            <div style={{ position: 'fixed', width: '100%', top: '0' }}>
                <Navbar></Navbar>
                <AdminSidebar></AdminSidebar>

            </div>
            <div className="mt-3 p-3">
                <form className="border p-4 mt-5 shadow-sm" style={{ width: '60%', margin: 'auto' }}>
                    <h2 className="text-start text-capitalize"> Add a New admin from here</h2>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Your Email</label>
                        <input type="text" name="email" class="form-control" onBlur={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputRegion" class="form-label">Your Name</label>
                        <input type="text" name="name" onBlur={handleChange} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="">
                        <input type="file" onChange={handleImgUpload} id="exampleCheck1" />

                    </div>
                    <button type="submit" onClick={handleAddService} class="btn btn-primary mt-2">Submit</button>
                </form>

                <div>
                    <h2 className="mt-3" style={{ marginLeft: '240px' }}> Current Admin</h2>
                    <table className="table border mt-3" style={{ width: '60%', marginLeft: '240px' }}>

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
                                admin.map((itemOrder, index) => (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{itemOrder.name}</td>
                                        <td>{itemOrder.email}</td>
                                        <td className="imgStyle"><img style={{ height: '100px', width: '100px' }} src={itemOrder.imgURL} alt="" /></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    );
};

export default AddAdmin;