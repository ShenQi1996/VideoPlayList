import React, { useEffect, useState } from "react"

//Components
import MyButton from "./mybutton";
//Bootstrap
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem";
//Style
import "./style/list.css";

const List = ({videos, mylist, setMyList}) => {    
    const [state, setState] = useState(videos)
    useEffect(() => {
        setState(videos)
    }, [videos])
    return (
        <Row xs={1} md={4} className="g-4 my-3">
            {state.map((video, idx) => (
            <Col key={idx}>
                <Card className="d-flex text-center">
                    <Card.Img variant="top" src={video.thumbnail_url} />
                    <Card.Body>
                        <Card.Title>{video.title}</Card.Title>
                        <Card.Text className="description">
                                {video.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex flex-column">
                        <MyButton video={video} mylist={mylist} setMyList={setMyList} />
                    </Card.Footer>
                </Card>
            </Col>
            ))}
      </Row>
    )
}

export default List;