import React, {useState, useEffect} from "react";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Root = () => {
    const [videos, setVideos] = useState([]);
    const [start, setStart] = useState(false)
    useEffect(() => {
        fetch("http://localhost:3000/videos")
        .then(res => res.json())
        .then(response => {
            setVideos(response.videos)
            console.log(videos)
        })
    }, [start])

    const handleStart = () =>{
        setStart(!start)
    }

    return (
        <div>
            <h1>hello </h1>
            <Button onClick={handleStart}>Start</Button>
        </div>   
    )
}

export default Root;