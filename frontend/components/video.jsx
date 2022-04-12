import React, {useState} from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
//Style
import "./style/video.css"
const Video = ({videos}) => {
    return(
        <Container fluid className="d-flex flex-column align-items-center justify-content-center">
            {videos.map((video, idx) => (
                <Card key={idx} className="video mb-2 flex-row">
                    {/* <div className="image">
                        <img src={video.thumbnail_url} alt="" />
                    </div> */}
                    <Card.Img variant="" className="image" src={video.thumbnail_url} />
                    <Card.Body>
                        <Card.Title>{video.title}</Card.Title>
                        {/* <p>{video.title}</p> */}
                        <Card.Text className="description">
                                {video.description}
                        </Card.Text>
                            View Count: {video.views}
                    </Card.Body>
                </Card>
            ))}
            {/* <iframe className="videoPlay" src={`https://www.youtube.com/embed/${videos[0].video_id}`} allowFullScreen/> */}
        </Container>
    )
}

export default Video