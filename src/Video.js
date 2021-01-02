import React, {useRef, useState} from 'react'
import './Video.css';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import {IconButton} from "@material-ui/core";

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
    }) {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            setPlaying(false);
            videoRef.current.pause();
        }
        else {
            setPlaying(true);
            videoRef.current.play();
        }
    }

    return (
        <div className="video">
            <video
                className="video__player"
                loop
                muted={muted}
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            >
            </video>
            <div className="video__volume">
                { muted ?
                    <IconButton className="video__volumeIconButton" onClick={() => setMuted(false)}>
                        <VolumeOffIcon fontSize="large"/>
                    </IconButton>
                    :
                    <IconButton className="video__volumeIconButton" onClick={() => setMuted(true)}>
                        <VolumeUpIcon fontSize="large"/>
                    </IconButton>
                }

            </div>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    );
}

export default Video;
