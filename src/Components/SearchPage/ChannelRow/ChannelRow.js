import React from "react";
import "./channelRow.css";
import {Avatar} from "@mui/material";
import {VerifiedOutlined} from "@mui/icons-material";

function ChannelRow({image, verified, channel, subs, noOfVideos, description}) {
    return <div className={"channel-row"}>
        <Avatar className={"channel-row-avatar"} src={image}
                alt={channel}/>
        <div className={"channel-row-text"}>
            <h4>{channel}{verified && <VerifiedOutlined/>}</h4>
            <p>{subs} subscribers * {noOfVideos} videos</p>
            <p>{description}</p>
        </div>

    </div>
}

export default ChannelRow