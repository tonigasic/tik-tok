import React, {useRef, useState} from 'react'
import './Video.css';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
    const [playing, setPlaying] = useState(false);
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
                onClick={onVideoPress}
                ref={videoRef}
                src="https://v19.tiktokcdn.com/7fe0ac353a20706f5787eaebbfa85cd0/5fefce28/video/tos/alisg/tos-alisg-pve-0037c001/1b2cce2205e44c55bc90e155b705cfbc/?a=1233&br=4132&bt=2066&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210101193627010189048210157443D1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amk5cG9zOWw5eTMzZTczM0ApaWdkZGk6Mzw6Nzo8Z2ZkaGdnbmI1amYxbGhfLS1hMTRzcy9jNGIyLi0tNS8uMWMzYWI6Yw%3D%3D&vl=&vr="
            >
            </video>
            <VideoFooter
                channel={'channel'}
                description={'this is a description'}
                song={'this is a song'}
            />
            <VideoSidebar

            />
        </div>
    );
}

export default Video;
