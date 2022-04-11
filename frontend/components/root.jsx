import React, {useState, useEffect} from "react";

//Components
import Video from "./video"
import UserList from "./userlist";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel"
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
            {/* <Button onClick={handleStart}>Start</Button> */}
            {/* <Carousel> */}
                {!videos == " " ? ( videos.map((video, idx) => (
                    // <Carousel.Item  key={idx} >
                        <Video key={idx} video={video}/>     
                    /* </Carousel.Item> */
                ))) : <h1>Something is wrong</h1> }
            {/* </Carousel> */}
            <UserList />
        </div>   
    )
}

export default Root;