import React, {useEffect, useState} from 'react'
import './App.css';
import Video from "./Video";
import db from "./firebase";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        db
            .collection('videos')
            .onSnapshot(snapshot => {
                setVideos(snapshot.docs.map(doc => doc.data()))
            })
    }, [videos])

    return (
        <div className="app">
          <div className="app__videos">
              { videos.map(video => (
                  <Video
                      url={video.url}
                      channel={video.channel}
                      description={video.description}
                      song={video.song}
                      likes={video.likes}
                      messages={video.messages}
                      shares={video.shares}
                  />
              ))}
          </div>
        </div>
    );
}

export default App;
