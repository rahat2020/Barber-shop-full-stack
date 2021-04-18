import React,{ useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
    const location = useLocation
    const [service, setService] = useState({
        name: '',
        Description: '',
        region: '',
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
            const url = `https://sleepy-fortress-88910.herokuapp.com/review`
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

    return (
        <section >
                <Navbar></Navbar>
                <Sidebar></Sidebar>
            <form className="border p-4 mt-5 shadow-sm" style={{ width: '60%', margin: 'auto' }}>
                <h2 className="text-center text-capitalize"> Add your review about the service</h2>
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Your name</label>
                    <input type="text" name="name" class="form-control" onBlur={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputRegion" class="form-label">Your region</label>
                    <input type="text" name="region" onBlur={handleChange} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputRegion" class="form-label"> Description</label>
                    <textarea type="text" name="Description" class="form-control" onBlur={handleChange} id="exampleInputPassword1" />
                </div>
                <div class="">
                    <input type="file" onChange={handleImgUpload} id="exampleCheck1" />

                </div>
                <button type="submit" onClick={handleAddService} class="btn btn-primary mt-2">Submit</button>
            </form>
        </section>
    );
};

export default AddReview;