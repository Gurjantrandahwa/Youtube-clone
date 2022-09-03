import React from "react";
import "./VideoRow.css";

function VideoRow({view, title, subs, description, timestamp, channel, image}) {
    return <div className={"video-row"}>
        <img src={image} alt={""}/>
        <div className={"video-row-text"}>
            <h3>{title}</h3>
            <p className={"video-row-headline"}>{channel} &nbsp;
                <span className={"border-video-subs"}>
                    <span className={"video-row-subs"}>{subs} </span>
                     Subscribers
                </span>
                <span>  &nbsp;* {view} views  </span>
                &nbsp;&nbsp; {timestamp}
            </p>
            <p className={"video-row-description"}>{description}</p>
        </div>
    </div>
}

export default VideoRow