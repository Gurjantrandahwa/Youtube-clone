import React, {useState} from "react";
import "./header.css";
import img from "./img.png"
import {
    KeyboardVoice,
    Menu,
    NotificationsOutlined,
    Search,
    VideoCallOutlined
} from "@mui/icons-material";
import {Avatar, IconButton} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
    const [input, setInput] = useState('')
    return <div className={"header"}>
        <div className={"header-logo"}>
            <Menu/>
            <Link to={"/"}>
                <img src={img} alt={"logo"} className={"youtube-logo"}/>
            </Link>

        </div>
        <div className={"header-input"}>
            <input type={"text"}
                   placeholder={"Search"}
                   value={input}
                   onChange={(e) => {
                       setInput(e.target.value)
                   }}/>
            <Link to={`/search/${input}`}>
                <Search className={"header-input-search-button"}/>
            </Link>
        </div>
        {/*<div>*/}
        {/*    /!*<IconButton> <KeyboardVoice/></IconButton>*!/*/}
        {/*</div>*/}
        <div className={"header-icons"}>
            <VideoCallOutlined/>
            <NotificationsOutlined/>
            <Avatar/>
        </div>

    </div>
}

export default Header