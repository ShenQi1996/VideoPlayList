import React, { useEffect, useState } from "react";
import { fetchPlayLists } from "../util/myplaylist_api_util";
import Video from "./video";

//Bootstrap
import Accordion from 'react-bootstrap/Accordion';
//Style
import "./style/myplaylist.css";




const MyPlayList = ({ change, setChange}) => {
    const [lists, setLists] = useState([])
    //const [newlist, setNewList] = useState(false)
    useEffect(() => {
        fetchPlayLists()
        .then(res =>Object.values(res))
        .then(resp => setLists(resp))
    }, [change])

    const handleLists = () => {
        if(lists.length === 0){
            return (
                <h1>Nothing</h1>
            )
        }else{
            return (
                <>
                {lists.map((list, idx) => (
                    <Accordion.Item key={idx} eventKey={idx} className="accordinItem">
                        <Accordion.Header>{list.title}</Accordion.Header>
                        <Accordion.Body>
                            <Video id={list.id} videos_id={list.videos_id} videos_title={list.videos_title} descriptions={list.descriptions} thumbnail_urls={list.thumbnail_urls} views={list.views} setChange={setChange} change={change}/>
                        </Accordion.Body>
                    </Accordion.Item >
                ))}
                </>
            )
        }
    }

    return (
        <div className="myPlayList">
            <h1 className="py-5">Playlists</h1>
            <Accordion defaultActiveKey="0" flush >
                {handleLists()}
            </Accordion>
        </div>
    )
}

export default MyPlayList;