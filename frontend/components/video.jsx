import React, {useEffect, useState} from "react";


//Api
import { deletePlayList } from "../util/myplaylist_api_util";

//Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//Style
import "./style/video.css"





/**
 * item: [{
 *      videos_id: "",
 *      videos_title: "",
 *      descriptions: "",
 *      thumbnail_urls: "",
 * }]
 */



const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};



const Video = ({id ,videos_id, videos_title, descriptions, thumbnail_urls, views, setChange, change}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        let videos = converData(videos_id, videos_title, descriptions, thumbnail_urls, views)
        setItems(videos)
    }, [])
    
    const converData = (videos_id, videos_title, descriptions, thumbnail_urls, views) => {
        let temp = [];
        for(let i = 0 ; i < videos_id.length ; i++){
            let obj = {
                video_id: videos_id[i],
                videos_title: videos_title[i],
                description: descriptions[i],
                thumbnail_url: thumbnail_urls[i],
                views: views[i],
            }
            temp.push(obj);
        }
        return temp;
    }

    const onDragEnd = (result) =>{
        // dropped outside the list
        if (!result.destination) {
        return;
        }
        const newItems = reorder(items,result.source.index,result.destination.index )
        setItems(newItems)
    };

    
    const handleDelete = (id) => {
        deletePlayList(id)
        setChange(!change)
    }

    const handleVideos = () => {
        if(items.length === 0){
            return (
                <Col className="d-flex justify-content-center my-3">
                    <Button variant="outline-danger" onClick={() => handleDelete(id)}>Delete</Button>
                </Col>
            )
        }else{
                return (
                    <Container className="currentPlayList mt-3">
                        <Row>
                            <Col xs={12} mb={12} className="px-0 videoViewer">
                                <iframe src={items.length === 0 ? "http://www.youtube.com/embed/" : `http://www.youtube.com/embed/${items[0].video_id}`}
                                title="YouTube video"
                                allowFullScreen
                                className="w-100 h-100"></iframe>
                            </Col>
                            <Col xs={12} mb={12} className="text_description">
                                <div>
                                    <h4>{items.length === 0 ? "No video" : items[0].videos_title}</h4>
                                    <h6>{items.length === 0 ? "" : `Views : ${items[0].views}`}</h6>
                                </div>
                                <h5>{items.length === 0 ? "" : "Description :"}</h5>
                                <p className="p-3">{items.length === 0 ? "" : items[0].description}</p>
                            </Col>
                            <Col className="btn_col" xs={12} mb={12}>
                                <h3 className="unSavePlayList">Play List : </h3>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided) => (
                                            <Col
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                >
                                                {items.map((video, index) => (
                                                    <Draggable key={video.video_id} draggableId={video.video_id} index={index}>
                                                    {(provided) => (
                                                        <Row className="playlistItem" 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        >
                                                            <Col className="p-0" xs={5} mb={2} >
                                                                    <img src={video.thumbnail_url} alt={video.videos_title} />
                                                            </Col>
                                                            <Col className="pt-3" xs={7} mb={8}>
                                                                <h6 className="video_title">{video.videos_title}</h6>
                                                                <p className="description">{video.description}</p> 
                                                            </Col>
                                                        </Row>
                                                    )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                                <Col className="d-flex justify-content-center my-3">
                                                    <Button variant="outline-danger" onClick={() => handleDelete(id)}>Delete</Button>
                                                </Col>
                                            </Col>
                                        )}
                                    </Droppable>
                                </DragDropContext> 
                            </Col>
                        </Row>
                    </Container>
                )
        }
    }

    return(
        <Container className="h-auto">
         {handleVideos()}
        </Container>
    )
}

export default Video