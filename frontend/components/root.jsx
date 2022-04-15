import React, {useState, useEffect} from "react";

//Components
import Video from "./video"
import List from "./list";
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
    const [page, setPage] = useState(1)
    const [mylist, setMyList] = useState([])
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
                <Button className="my-4" onClick={() => handleNext(page)}>Next</Button> 
            )
        }else{
            return (
                <div className="my-4">
                    <Row xs={1} md={2} className="g-4" >
                        <Col>
                            <Button onClick={() => handlePre(page)}>Prev</Button> 
                        </Col>
                        <Col>
                            <Button onClick={() => handleNext(page)}>Next</Button> 
                        </Col>
                    </Row>
                </div>
            )
        }
    }
    return (
        <Container className="text-center">
            <h1>My Video PlayList </h1>
            <Video videos={mylist} setMyList={setMyList} />
            <List videos={videos} mylist={mylist} setMyList={setMyList} />
            {handlePagesBtn()}
        </Container>   
    )
}

export default Root;