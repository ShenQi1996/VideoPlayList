import React, {useState} from "react";

//Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
//Bootstrap
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card"
//Style
import "./style/video.css"


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

const Video = ({videos}) => {
    const [items, setItems] = useState(videos)
    const onDragEnd = (result) =>{
        // dropped outside the list
        if (!result.destination) {
        return;
        }
        const newItems = reorder(items,result.source.index,result.destination.index )
        setItems(newItems)
    };

    return(
        <div className="d-flex videoContainer">
            <div className="mx-3 ratio videoPlayer">
                <iframe
                    src={`https://www.youtube.com/embed/${items[0].video_id}`}
                    title="YouTube video"
                    allowFullScreen
                ></iframe>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                {(provided) => (
                    <CardGroup className="d-block align-items-center videoslist"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    >
                    {items.map((video, index) => (
                        <Draggable key={video.id.toString()} draggableId={video.id.toString()} index={index}>
                        {(provided) => (
                            <Card className="video mb-2 flex-row" 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            >
                            <Card.Img variant="" className="image" src={video.thumbnail_url} />
                            <Card.Body className="PlayListCardBody">
                                <Card.Title>{video.title}</Card.Title>
                                <Card.Text className="description">
                                    {video.description}
                                </Card.Text>
                                View Count: {video.views}
                            </Card.Body>
                            </Card>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </CardGroup>
                )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Video