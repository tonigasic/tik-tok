import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import Video from "./Video";
import db from "./firebase";

function App() {
    const [videos, setVideos] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        db
            .collection('videos')
            .onSnapshot(snapshot => {
                setVideos(snapshot.docs.map(doc => doc.data()))
            })
    }, [videos])

    return (
        <div className="app">
          <div className="app__videos" ref={containerRef}>
              { videos.map((video, index) => (
                  <Video
                      key={index}
                      url={video.url}
                      channel={video.channel}
                      description={video.description}
                      song={video.song}
                      likes={video.likes}
                      messages={video.messages}
                      shares={video.shares}
                      containerRef={containerRef}
                  />
              ))}
          </div>
        </div>
    );
}

export default App;
