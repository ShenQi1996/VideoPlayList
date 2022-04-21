import React, {useEffect, useState} from "react";


//Components
import MyButton from "./mybutton";

//Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

//Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
//style
import "./style/currentplaylist.css";



const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};


const CurrentPlayList = ({mylist , setMyList, setPlm, pln, handleCreate}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(mylist);
    }, [mylist])

    
    const onDragEnd = (result) =>{
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        const newItems = reorder(items,result.source.index,result.destination.index )
        setItems(newItems)
    };
    

    const handleCreateName = e => {
        e.preventDefault();
        setPlm(e.target[0].value)
        e.target[0].value = "";
    }

    const handleName = () => {
        setPlm("")
    }


    return (
        <>
            {pln === "" ?            
            <Col className="mt-2 FormPlaylist">
                <Form onSubmit={handleCreateName}>
                    <Form.Group className="mb-3" controlId="playlistName">
                        <Form.Label>Playlist Name :</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                            Lets see what kind of playlist name you can think of
                        </Form.Text>
                    </Form.Group>
                    <Button  variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col> :         
            <Container className="currentPlayList mt-3">
                <Col xs={12} className="d-flex justify-content-between align-items-center m-2">
                    <h2>{pln}</h2>
                    <Button  variant="outline-dark" onClick={handleCreate}>Save Playlist</Button>
                    <Button  variant="outline-dark" onClick={handleName}>Edit Name</Button>
                </Col>
                <Row>
                    <Col xs={12} mb={12} className="px-0 videoViewer">
                        <iframe src={items.length === 0 ? "http://www.youtube.com/embed/" : `http://www.youtube.com/embed/${items[0].video_id}`}
                        title="YouTube video"
                        allowFullScreen
                        className="w-100 h-100"></iframe>
                    </Col>
                    <Col xs={12} mb={12} className="text_description">
                        <div>
                            <h4>{items.length === 0 ? "No video" : items[0].title}</h4>
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
                                                   <Col className="p-0" xs={4} mb={2} >
                                                        <img src={video.thumbnail_url} alt={video.title} />
                                                   </Col>
                                                   <Col className="pt-3" xs={8} mb={8}>
                                                       <h6 className="video_title">{video.title}</h6>
                                                       <p className="description">{video.description}</p> 
                                                   </Col>
                                                   <Col xs={12} className=" p-0 d-flex flex-column">
                                                    <MyButton video={video} mylist={mylist} setMyList={setMyList} />
                                                   </Col>
                                                </Row>
                                            )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Col>
                                )}
                            </Droppable>
                        </DragDropContext> 
                    </Col>
                </Row>
            </Container>}
        </>
    )
}

export default CurrentPlayList