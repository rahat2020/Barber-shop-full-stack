import React, { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
const AddServices = () => {
    const location = useLocation
    const [service, setService] = useState({
        name: '',
        description: '',
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
                alert("image added to the database");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddService = e => {
        e.preventDefault(true);
        if (service.imgURL !== '') {
            console.log(service)
            const url = `http://localhost:5000/addServices`
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
            alert('product added successfully')

        }

    };


    return (
        <div className="mt-3">
            <h4> ADD SERVICES</h4>
            <form className="mt-3 border p-4 shadow-sm  ">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" onBlur={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"name="name" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Service description</label>
                    <textarea type="text" class="form-control" onBlur={handleChange} id="exampleInputPassword1" name="description"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="file" class=" " onChange={handleImgUpload} id="exampleFile1" name="img"/>
                </div>
                <button type="submit" onClick={handleAddService} class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddServices;