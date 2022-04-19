import React, { useState, useEffect } from "react";
import VideoJS from "../components/VideoJS"; // point to where the functional component is stored



const Livepeer = ({ stream }) => {
    const playbackURL = "https://livepeercdn.com/hls/1fcae6n18ljto86h/index.m3u8"

    const playerRef = React.useRef(null);

    const videoJsOptions = {
        // lookup the options in the docs for more options
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        height: 10,
        width: 10,
        sources: [
            {
                src: playbackURL,
                type: "application/x-mpegURL"
            },
        ],
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // you can handle player events here
        player.on("waiting", () => {
            console.log("player is waiting");
        });

        player.on("dispose", () => {
            console.log("player will dispose");
        });
    };

    return (
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />)
};

export default Livepeer;