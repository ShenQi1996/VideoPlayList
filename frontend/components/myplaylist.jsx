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
    const [updata, setUpdata] = useState(false)
    useEffect(() => {
        fetchPlayLists()
        .then(res =>Object.values(res) )
        .then(resp => setLists(resp))
    }, [updata])

    const handleCreate = () => {
        const title = "sam's tses1";
        const videos_id = mylist.map((list) => list.video_id);
        const videos_title = mylist.map((list) => list.title);
        const views = mylist.map((list) => list.views);
        const likes = mylist.map((list) => list.likes);
        const comments = mylist.map((list) => list.comments)
        const descriptions = mylist.map((list) => list.description)
        const thumbnail_urls = mylist.map((list) =>list.thumbnail_url)
        createPlayList(title, videos_id, videos_title, views, likes, comments, descriptions, thumbnail_urls)
        setUpdata(!updata)
    }
    console.log(lists)
    const handleLists = () => {
        if(lists.length === 0){
            return (
                <h1>Nothing</h1>
            )
        }else{
            return (
                <>
                {lists.map((list, idx) => (
                    <Accordion.Item  eventKey={idx}>
                        <Accordion.Header>{list.title}</Accordion.Header>
                        <Accordion.Body>
                            <Video videos_id={list.videos_id} videos_title={list.videos_title} descriptions={list.descriptions} thumbnail_urls={list.thumbnail_urls} views={list.views} />
                        </Accordion.Body>
                    </Accordion.Item >
                ))}
                </>
            )
        }
    }

    return (
        <div className="myPlayList">
            <h1>PlayList</h1>
            <Button className="my-2" onClick={() => handleCreate()}>Create</Button>
            <Accordion defaultActiveKey="0">
                {handleLists()}
            </Accordion>
        </div>
    )
}

export default MyPlayList;