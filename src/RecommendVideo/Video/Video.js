import React from "react";
import "./video.css";
import {Avatar} from "@mui/material";

function Video({image, title, channel, channelImage, views, timestamp,}) {
    return <div className={"video"}>
        <img src={image} alt={""} className={"video-img"}/>
        <div className={"video-info"}>
            <Avatar className={"video-avatar"} src={channelImage}
                    alt={channel}
            />
            <div className={"video-text"}>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} * {timestamp}</p>
            </div>
        </div>
    </div>
}

export default Video