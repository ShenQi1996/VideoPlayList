import React, {useEffect, useState} from "react";

//Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
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



const Video = ({videos_id, videos_title, descriptions, thumbnail_urls, views}) => {
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

    console.log(items)
    const handleVideos = () => {
        if(items.length === 0){
            return (
                <h1>Nothing is in the PlayList</h1>
            )
        }else{
                return (
                    <Row className="h-100">
                        <Col mb={12} >
                            <h3>{items[0].videos_title}</h3>
                            <Container className="w-100 videoPlayer">
                                <iframe
                                src={`https://www.youtube.com/embed/${items[0].video_id}`}
                                title="YouTube video"
                                allowFullScreen
                                className="w-50"></iframe>
                            </Container>
                            <Container>
                                <h5>Description: </h5>
                                <p className="description">{items[0].description}</p>
                                <h5>Views: {items[0].views }</h5>
                            </Container>
                        </Col>
                        <Col md={12}>
                            <Container>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                    {(provided) => (
                                        <Col className=""
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        >
                                        {items.map((video, index) => (
                                            <Draggable key={video.video_id} draggableId={video.video_id} index={index}>
                                            {(provided) => (
                                                <Row className="mb-2" 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                >
                                                    <p>{video.videos_title}</p>
                                                </Row>
                                            )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                        </Col>
                                    )}
                                    </Droppable>
                                </DragDropContext> 
                            </Container>                            
                        </Col>
                    </Row>
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