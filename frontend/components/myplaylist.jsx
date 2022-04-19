import React, { useEffect, useState } from "react";
import { fetchPlayLists, fetchPlayList, createPlayList, deletePlayList } from "../util/myplaylist_api_util";
import Video from "./video";

//Bootstrap
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
//Style
import "./style/myplaylist.css";




const MyPlayList = ({mylist}) => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        fetchPlayLists()
        .then(res =>Object.values(res) )
        .then(resp => setLists(resp))
    }, [])

    const handleCreate = () => {
        const title = "sam's first";
        const videos = [...mylist];
        createPlayList(title, videos)
    }
    console.log(lists)

    const handleLists = () => {
        if(lists.length === 0){
            return (
                <h1>Nothing</h1>
            )
        }else{
            console.log("I am in the else")
            for(let i = 0; i < lists.length; i++){
                return (
                    <Accordion.Item  eventKey={i}>
                        <Accordion.Header>{lists[i].title}</Accordion.Header>
                        <Accordion.Body>
                            {/* <Video videos={lists[i].videos}/> */}
                        </Accordion.Body>
                    </Accordion.Item >
                )
            }
        }
    }

    return (
        <div className="myPlayList">
            <h1>I am here </h1>
            <Button onClick={() => handleCreate()}>Create</Button>
            <Accordion defaultActiveKey="0">
                {handleLists()}
            </Accordion>
        </div>
    )
}

export default MyPlayList;