import React, {useState, useEffect} from "react";

//Components
import CurrentPlayList from "./currentplaylist";
import List from "./list";
import MyPlayList from "./MyPlayList";
//API
import {createPlayList } from "../util/myplaylist_api_util";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Style
import "./style/root.css";

const Root = () => {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [mylist, setMyList] = useState([]);
    const [pln, setPlm] = useState("");
    const [change, setChange] = useState(false);


    useEffect(() => {
        fetch(`https://mock-youtube-api.herokuapp.com/api/videos?page=${page.toString()}`)
        .then(res => res.json())
        .then(response => {
            setVideos(response.videos)
        })
    }, [page])

    const handleNext = (page) => {
        setPage(page+1);
    }
    const handlePre = (page) => {
        if(page === 0){
            return console.error("Page can not go blow 0");
        }else{
            setPage(page-1)
        }
    }

    const handlePagesBtn = () => {
        if(page === 1){
            return (
                <Button  variant="outline-dark" className="my-4" onClick={() => handleNext(page)}>Next</Button> 
            )
        }else{
            return (
                <div className="my-4">
                    <Row xs={1} md={2} className="g-4" >
                        <Col>
                            <Button  variant="outline-dark" onClick={() => handlePre(page)}>Prev</Button> 
                        </Col>
                        <Col>
                            <Button  variant="outline-dark" onClick={() => handleNext(page)}>Next</Button> 
                        </Col>
                    </Row>
                </div>
            )
        }
    }

    const handleCreate = () => {
        let title = `${pln}`;
        const videos_id = mylist.map((list) => list.video_id);
        const videos_title = mylist.map((list) => list.title);
        const views = mylist.map((list) => list.views);
        const likes = mylist.map((list) => list.likes);
        const comments = mylist.map((list) => list.comments)
        const descriptions = mylist.map((list) => list.description)
        const thumbnail_urls = mylist.map((list) =>list.thumbnail_url)
        createPlayList(title, videos_id, videos_title, views, likes, comments, descriptions, thumbnail_urls)
        setChange(!change)
        setPlm("")
        setMyList([])
    }
    return (
        <Container className="text-center py-5 root">
            <Row>
                <h1>My Video Playlist </h1>
            </Row>
            <CurrentPlayList className="currentPlayList" mylist={mylist} setMyList={setMyList} pln={pln} setPlm={setPlm} handleCreate={handleCreate} />
            <List className="list" videos={videos} mylist={mylist} setMyList={setMyList} />
            {handlePagesBtn()}
            <MyPlayList className="myplaylist" change={change} setChange={setChange} />
        </Container>   
    )
}

export default Root;