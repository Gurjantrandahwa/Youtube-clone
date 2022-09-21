import React from "react";
import "./recommendVideo.css";
import Video from "../Video/Video";
import img from "../Images/img.png";
import img_1 from "../Images/img_1.png";
import img_2 from "../Images/img_2.png";
import img_3 from "../Images/img_3.png";
import img_4 from "../Images/img_4.png";
import img_5 from "../Images/img_5.png";
import img_6 from "../Images/img_6.png";
import img_7 from "../Images/img_7.png";
import img_8 from "../Images/img_8.png";


function RecommendVideo() {
    return <div className={"recommend-video"}>
        <h2>Recommended</h2>
        <div className={"recommend-video-videos"}>
            <Video title={"Become a something in next 10 min"}
                   views={"2.6M views"}
                   timestamp={"9 days ago"}
                   channelImage={img}
                   channel={"Sonny"}
                   image={img}
            />
            <Video title={"Let's discuss something for paperwork"}
                   views={"2.5M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_1}
                   channel={"Sonny"}
                   image={img_1}
            />
            <Video title={"Dark green forest with sunset"}
                   views={"2M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_2}
                   channel={"Sonny"}
                   image={img_2}
            />
            <Video title={"A store with all facilities"}
                   views={"2M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_3}
                   channel={"Sonny"}
                   image={img_3}
            />
            <Video title={"Technology give the future"}
                   views={"1.9M views"}
                   timestamp={"1 days ago"}
                   channelImage={img_4}
                   channel={"Sonny"}
                   image={img_4}
            />
            <Video title={"A great singing concert"}
                   views={"2.6M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_5}
                   channel={"Sonny"}
                   image={img_5}
            />
            <Video title={"Some exercise At GYM with friends"}
                   views={"2M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_6}
                   channel={"Sonny"}
                   image={img_6}
            />
            <Video title={"Become a something for health"}
                   views={"2M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_7}
                   channel={"Sonny"}
                   image={img_7}
            />
            <Video title={"Photography is passion for me"}
                   views={"2M views"}
                   timestamp={"3 days ago"}
                   channelImage={img_8}
                   channel={"Sonny"}
                   image={img_8}
            />
        </div>
    </div>
}

export default RecommendVideo