import React, {useState, useEffect, useRef} from "react";

//Components
import Video from "./video"
import List from "./list";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
//Style
import "./style/root.css";

const Root = () => {
    const [videos, setVideos] = useState([]);
    const [start, setStart] = useState(false)
    const [mylist, setMyList] = useState([])
    const pageNum = useRef()
    useEffect(() => {
        fetch("http://localhost:3000/videos")
        .then(res => res.json())
        .then(response => {
            console.log()
            setVideos(response.videos)
        })
    }, [])


    // const handleStart = () =>{
    //     if(mylist.length === 0){
    //         return (
    //             console.log("Something is worng")
    //         )
    //     }else{
    //         setStart(!start)
    //     }
    //     // setFetchV(!fetchV)
    // }


    // const fetchVideos = () =>{
    //     fetch("http://localhost:3000/videos")
    //     .then(res => res.json())
    //     .then(response => {
    //         setVideos(response.videos)
    //         setFetchV(!fetchV)
    //     })
    // }


    // const handleButtons = () =>{
    //     if(!fetchV){
    //         return(
    //             <Button onClick={fetchVideos}>Fetch Video</Button>
    //         )
    //     }else{
    //         return(
    //             <div>
    //                 <Button onClick={handleStart}>Start</Button>
    //                 <List videos={videos} mylist={mylist} setMyList={setMyList} />
    //             </div>
    //         )
    //     }
    // }

    // const checkVideos  = () => {
    //     if(mylist.length === 0){
    //         return (<div></div>)
    //     }else{
    //         return(
    //             <Video videos={mylist} />
    //         )
    //     }
    // }

    console.log(mylist)
    return (
        <Container className="text-center">
            <h1>My Video PlayList </h1>
            {/* <Button onClick={handleStart}>Create</Button> */}
            <List videos={videos} mylist={mylist} setMyList={setMyList} />
            <Video videos={mylist} setMyList={setMyList} />
        </Container>   
    )
}

export default Root;