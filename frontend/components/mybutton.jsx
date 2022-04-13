import React, {useState} from "react";

//Bootstrap
import Button from "react-bootstrap/Button"
const MyButton = ({video, mylist, setMyList}) => {
    const [state, setState] = useState(false);
    const addToList = (video) =>{
        const newList = mylist
        newList.unshift(video)
        console.log(newList)
        setState(!state)
        setMyList(newList)
    }
    const removeFromList = (video) =>{
        const newList = mylist.filter(item => item.video_id != video.video_id)
        console.log(newList)
        setMyList(newList)
        setState(!state)
    }
    const handleButtons = (video) =>{
        if(!state){
            return(
                <Button onClick={() => addToList(video)}>Add</Button>
            )
        }else{
            return(
                <Button onClick={() =>removeFromList(video)}>Remove</Button>
            )
        }
    }
    return (
        handleButtons(video)
    )
}

export default MyButton