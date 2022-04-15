import React, {useEffect, useState} from "react";

//Bootstrap
import Button from "react-bootstrap/Button"



const MyButton = ({video, mylist, setMyList}) => {
    const [item, setItem] = useState(video)
    useEffect( () => {
        setItem(video)
    }, [video])
    const addToList = (video) =>{
        const newList = [...mylist]
        newList.unshift(video)
        console.log(newList)
        setMyList(newList)
    }

    const removeFromList = (video) =>{
        const newList = mylist.filter(item => item.video_id != video.video_id)
        console.log(newList)
        setMyList(newList)
    }

    if(mylist.some(video => video.video_id === item.video_id)){
        return (
            <Button onClick={() =>removeFromList(video)}>Remove</Button>
        )
    }else{
        return(
            <Button onClick={() => addToList(video)}>Add</Button>
        )
    }
}

export default MyButton