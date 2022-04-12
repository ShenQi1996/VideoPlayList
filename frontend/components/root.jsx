import React, {useState, useEffect} from "react";

//Components
import Video from "./video"
import UserList from "./userlist";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
//Style
import "./style/root.css";

const Root = () => {
    const [videos, setVideos] = useState([]);
    const [start, setStart] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/videos")
        .then(res => res.json())
        .then(response => {
            setVideos(response.videos)
        })
    }, [])

    const handleStart = () =>{
        setStart(!start)
    }
    
    const checkVideos  = () => {
        if(videos.length === 0){
            return (<div></div>)
        }else{
            return(
                <Video videos={videos} />
            )
        }
    }
    return (
        <div className="text-center">
            <h1>My Video PlayList </h1>
            {checkVideos()}
        </div>   
    )
}

export default Root;