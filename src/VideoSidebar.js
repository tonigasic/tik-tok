import React, {useState} from 'react'
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import {IconButton} from "@material-ui/core";

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                    {liked ?
                        <IconButton className="videoSidebar__iconButton" onClick={() => setLiked(false)}>
                            <FavoriteIcon fontSize="large"/>
                        </IconButton>
                        :
                        <IconButton className="videoSidebar__iconButton" onClick={() => setLiked(true)}>
                            <FavoriteBorderIcon fontSize="large"/>
                        </IconButton>
                    }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <IconButton className="videoSidebar__iconButton">
                    <MessageIcon fontSize="large"/>
                </IconButton>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <IconButton className="videoSidebar__iconButton">
                    <ShareIcon fontSize="large"/>
                </IconButton>
                <p>{shares}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;
