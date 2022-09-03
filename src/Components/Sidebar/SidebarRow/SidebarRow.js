import React from "react";
import "./sidebarRow.css";

function SidebarRow({Icon, title, selected}) {
    return <div className={`sidebar-row ${selected && "selected"}`}>
        <Icon className={"sidebar-row-icon"}/>
        <h2 className={"sidebar-row-title"}>{title}</h2>
    </div>
}

export default SidebarRow