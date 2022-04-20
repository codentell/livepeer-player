import React from "react";
import { Player } from "livepeer-player"; // point to where the functional component is stored



const Livepeer = ({ stream }) => {
    const playbackURL = "https://livepeercdn.com/hls/ba42he2hjl9s26d5/index.m3u8"

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
        <Player options={videoJsOptions} onReady={handlePlayerReady} />)
};

export default Livepeer;