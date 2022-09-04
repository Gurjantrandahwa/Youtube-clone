import React from "react";
import "./search.css";
import {TuneOutlined} from "@mui/icons-material";
import ChannelRow from "./ChannelRow/ChannelRow";
import img from "../RecommendVideo/Video/Images/img.png"
import VideoRow from "./VideoRow/VideoRow";

function Search() {
    return <div className={"search"}>
        <div className={"search-filter"}>
            <TuneOutlined/>
            <h2>Filter</h2>
        </div>
        <hr/>
        <ChannelRow image={img}
                    channel={"Programmer"}
                    verified
                    subs={"766K"}
                    noOfVideos={"987"}
                    description={"Do you want to become JavaScript " +
                    "Developer & make an income? " +
                    "I just dropped a FREE ONE hour video training "}/>
        <hr/>
        <VideoRow channel={"Programmer"}
                  view={"1K"}
                  title={"Build the clone"}
                  timestamp={"Few seconds ago"}
                  subs={"66K"}
                  image={img}
                  description={"Do you want to become JavaScript " +
                  "Developer & make an income? " +
                  "I just dropped a FREE ONE hour video training "}/>

    </div>
}

export default Search