import React, {useState} from "react";

const Video = ({video}) => {
    return(
        <div>
            <iframe src={`https://www.youtube.com/embed/${video.video_id}`} allowFullScreen/>
        </div>
    )
}

export default Video