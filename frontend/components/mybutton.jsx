import React, {useEffect, useState} from "react";

//Bootstrap
import Button from "react-bootstrap/Button";

//Style
import "./style/mybutton.css";

const MyButton = ({video, mylist, setMyList}) => {
    const [item, setItem] = useState(video)
    useEffect( () => {
        setItem(video)
    }, [video])
    const addToList = (video) =>{
        const newList = [...mylist]
        newList.unshift(video)
        setMyList(newList)
    }

    const removeFromList = (video) =>{
        const newList = mylist.filter(item => item.video_id != video.video_id)
        setMyList(newList)
    }

    if(mylist.some(video => video.video_id === item.video_id)){
        return (
            <Button variant="outline-danger" onClick={() =>removeFromList(video)}>Remove</Button>
        )
    }else{
        return(
            <Button variant="outline-dark" onClick={() => addToList(video)}>Add</Button>
        )
    }
}

export default MyButton